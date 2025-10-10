# Environment Management Script for Windows PowerShell
# MyDigitalLegacy Vault Environment Setup

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet("setup", "validate", "backup", "secrets", "help")]
    [string]$Command = "help",
    
    [Parameter(Mandatory=$false)]
    [ValidateSet("development", "staging", "production")]
    [string]$Environment
)

# Function to generate secure random string
function Generate-Secret {
    $bytes = New-Object byte[] 32
    $rng = [System.Security.Cryptography.RNGCryptoServiceProvider]::Create()
    $rng.GetBytes($bytes)
    $rng.Dispose()
    return [Convert]::ToBase64String($bytes).Replace("=", "").Replace("+", "").Replace("/", "").Substring(0, 32)
}

# Function to write colored output
function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host $Message -ForegroundColor $Color
}

# Function to setup environment
function Setup-Environment {
    param([string]$EnvType)
    
    Write-ColorOutput "Setting up $EnvType environment..." "Blue"
    
    $envFile = ".env.$EnvType"
    if (!(Test-Path $envFile)) {
        Write-ColorOutput "Error: $envFile file not found!" "Red"
        exit 1
    }
    
    # Copy environment file
    Copy-Item $envFile ".env" -Force
    Write-ColorOutput "✓ Environment file copied" "Green"
    
    # Generate secrets if this is production setup
    if ($EnvType -eq "production") {
        Setup-ProductionSecrets
    }
    
    Write-ColorOutput "✓ $EnvType environment setup complete" "Green"
}

# Function to setup production secrets
function Setup-ProductionSecrets {
    Write-ColorOutput "Generating production secrets..." "Yellow"
    
    # Generate secrets
    $nextAuthSecret = Generate-Secret
    $encryptionKey = Generate-Secret
    $jwtSecret = Generate-Secret
    $backupEncryptionKey = Generate-Secret
    
    # Read and replace content
    $content = Get-Content ".env" -Raw
    $content = $content -replace "REPLACE-WITH-SECURE-32-CHAR-SECRET-GENERATED-BY-openssl-rand-base64-32", $nextAuthSecret
    $content = $content -replace "REPLACE-WITH-SECURE-32-CHAR-KEY-FOR-ASSET-ENCRYPTION", $encryptionKey
    $content = $content -replace "REPLACE-WITH-SECURE-JWT-SECRET-MINIMUM-32-CHARACTERS", $jwtSecret
    $content = $content -replace "REPLACE-WITH-BACKUP-ENCRYPTION-KEY", $backupEncryptionKey
    
    # Write back to file
    Set-Content ".env" $content -NoNewline
    
    Write-ColorOutput "✓ Production secrets generated" "Green"
    Write-ColorOutput "⚠️  Make sure to update database URLs and other service credentials manually" "Yellow"
}

# Function to validate environment
function Validate-Environment {
    Write-ColorOutput "Validating environment configuration..." "Blue"
    
    if (!(Test-Path ".env")) {
        Write-ColorOutput "Error: .env file not found!" "Red"
        exit 1
    }
    
    $requiredVars = @(
        "DATABASE_URL",
        "NEXTAUTH_SECRET",
        "NEXTAUTH_URL",
        "ENCRYPTION_KEY",
        "JWT_SECRET"
    )
    
    $content = Get-Content ".env"
    
    foreach ($var in $requiredVars) {
        $found = $content | Where-Object { $_ -match "^$var=" }
        if (!$found) {
            Write-ColorOutput "Error: $var not found in .env file" "Red"
            exit 1
        }
    }
    
    Write-ColorOutput "✓ Environment validation passed" "Green"
}

# Function to backup current environment
function Backup-Environment {
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $backupFile = ".env.backup.$timestamp"
    Copy-Item ".env" $backupFile
    Write-ColorOutput "✓ Environment backed up to $backupFile" "Green"
}

# Function to show help
function Show-Help {
    Write-Host "MyDigitalLegacy Vault - Environment Management (PowerShell)" -ForegroundColor "Blue"
    Write-Host ""
    Write-Host "Usage: .\setup-env.ps1 -Command [command] -Environment [environment]" -ForegroundColor "White"
    Write-Host ""
    Write-Host "Commands:" -ForegroundColor "Yellow"
    Write-Host "  setup       Setup environment (requires -Environment parameter)" -ForegroundColor "White"
    Write-Host "  validate    Validate current environment configuration" -ForegroundColor "White"
    Write-Host "  backup      Backup current environment configuration" -ForegroundColor "White"
    Write-Host "  secrets     Generate new production secrets" -ForegroundColor "White"
    Write-Host "  help        Show this help message" -ForegroundColor "White"
    Write-Host ""
    Write-Host "Environments:" -ForegroundColor "Yellow"
    Write-Host "  development" -ForegroundColor "White"
    Write-Host "  staging" -ForegroundColor "White"
    Write-Host "  production" -ForegroundColor "White"
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor "Yellow"
    Write-Host "  .\setup-env.ps1 -Command setup -Environment development" -ForegroundColor "White"
    Write-Host "  .\setup-env.ps1 -Command setup -Environment production" -ForegroundColor "White"
    Write-Host "  .\setup-env.ps1 -Command validate" -ForegroundColor "White"
    Write-Host "  .\setup-env.ps1 -Command backup" -ForegroundColor "White"
}

# Main script logic
switch ($Command) {
    "setup" {
        if (!$Environment) {
            Write-ColorOutput "Error: Environment parameter required (development|staging|production)" "Red"
            Show-Help
            exit 1
        }
        
        if (Test-Path ".env") {
            Write-ColorOutput "Existing .env file found. Creating backup..." "Yellow"
            Backup-Environment
        }
        
        Setup-Environment $Environment
        Validate-Environment
    }
    "validate" {
        Validate-Environment
    }
    "backup" {
        Backup-Environment
    }
    "secrets" {
        if (!(Test-Path ".env")) {
            Write-ColorOutput "Error: .env file not found!" "Red"
            exit 1
        }
        Backup-Environment
        Setup-ProductionSecrets
        Write-ColorOutput "✓ New secrets generated and applied" "Green"
    }
    "help" {
        Show-Help
    }
    default {
        Write-ColorOutput "Error: Unknown command '$Command'" "Red"
        Show-Help
        exit 1
    }
}