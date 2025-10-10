#!/bin/bash

# Environment Management Script for MyDigitalLegacy Vault
# This script helps manage environment configurations across different deployments

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_color() {
    printf "${1}${2}${NC}\n"
}

# Function to generate secure random string
generate_secret() {
    openssl rand -base64 32 | tr -d "=+/" | cut -c1-32
}

# Function to setup environment
setup_environment() {
    local env_type=$1
    
    print_color $BLUE "Setting up $env_type environment..."
    
    if [ ! -f ".env.$env_type" ]; then
        print_color $RED "Error: .env.$env_type file not found!"
        exit 1
    fi
    
    # Copy environment file
    cp ".env.$env_type" ".env"
    
    print_color $GREEN "✓ Environment file copied"
    
    # Generate secrets if this is production setup
    if [ "$env_type" = "production" ]; then
        setup_production_secrets
    fi
    
    print_color $GREEN "✓ $env_type environment setup complete"
}

# Function to setup production secrets
setup_production_secrets() {
    print_color $YELLOW "Generating production secrets..."
    
    # Generate secrets
    NEXTAUTH_SECRET=$(generate_secret)
    ENCRYPTION_KEY=$(generate_secret)
    JWT_SECRET=$(generate_secret)
    BACKUP_ENCRYPTION_KEY=$(generate_secret)
    
    # Replace placeholders in .env file
    sed -i "s/REPLACE-WITH-SECURE-32-CHAR-SECRET-GENERATED-BY-openssl-rand-base64-32/$NEXTAUTH_SECRET/g" .env
    sed -i "s/REPLACE-WITH-SECURE-32-CHAR-KEY-FOR-ASSET-ENCRYPTION/$ENCRYPTION_KEY/g" .env
    sed -i "s/REPLACE-WITH-SECURE-JWT-SECRET-MINIMUM-32-CHARACTERS/$JWT_SECRET/g" .env
    sed -i "s/REPLACE-WITH-BACKUP-ENCRYPTION-KEY/$BACKUP_ENCRYPTION_KEY/g" .env
    
    print_color $GREEN "✓ Production secrets generated"
    print_color $YELLOW "⚠️  Make sure to update database URLs and other service credentials manually"
}

# Function to validate environment
validate_environment() {
    print_color $BLUE "Validating environment configuration..."
    
    # Check if .env exists
    if [ ! -f ".env" ]; then
        print_color $RED "Error: .env file not found!"
        exit 1
    fi
    
    # Check required variables
    required_vars=(
        "DATABASE_URL"
        "NEXTAUTH_SECRET"
        "NEXTAUTH_URL"
        "ENCRYPTION_KEY"
        "JWT_SECRET"
    )
    
    for var in "${required_vars[@]}"; do
        if ! grep -q "^$var=" .env; then
            print_color $RED "Error: $var not found in .env file"
            exit 1
        fi
    done
    
    print_color $GREEN "✓ Environment validation passed"
}

# Function to backup current environment
backup_environment() {
    local timestamp=$(date +%Y%m%d_%H%M%S)
    cp .env ".env.backup.$timestamp"
    print_color $GREEN "✓ Environment backed up to .env.backup.$timestamp"
}

# Function to show help
show_help() {
    echo "MyDigitalLegacy Vault - Environment Management"
    echo ""
    echo "Usage: $0 [command] [environment]"
    echo ""
    echo "Commands:"
    echo "  setup [env]     Setup environment (development|staging|production)"
    echo "  validate        Validate current environment configuration"
    echo "  backup          Backup current environment configuration"
    echo "  secrets         Generate new production secrets"
    echo "  help            Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 setup development"
    echo "  $0 setup production"
    echo "  $0 validate"
    echo "  $0 backup"
}

# Main script logic
case "$1" in
    "setup")
        if [ -z "$2" ]; then
            print_color $RED "Error: Environment type required (development|staging|production)"
            show_help
            exit 1
        fi
        
        if [ -f ".env" ]; then
            print_color $YELLOW "Existing .env file found. Creating backup..."
            backup_environment
        fi
        
        setup_environment "$2"
        validate_environment
        ;;
    "validate")
        validate_environment
        ;;
    "backup")
        backup_environment
        ;;
    "secrets")
        if [ ! -f ".env" ]; then
            print_color $RED "Error: .env file not found!"
            exit 1
        fi
        backup_environment
        setup_production_secrets
        print_color $GREEN "✓ New secrets generated and applied"
        ;;
    "help"|"--help"|"-h")
        show_help
        ;;
    *)
        print_color $RED "Error: Unknown command '$1'"
        show_help
        exit 1
        ;;
esac