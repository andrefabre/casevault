# Environment Configuration Guide
# MyDigitalLegacy Vault

## Overview
This application supports multiple environment configurations:
- **Development**: Local development with minimal security
- **Staging**: Pre-production testing environment
- **Production**: Live deployment with maximum security

## Quick Setup

### Windows (PowerShell)
```powershell
# Setup development environment
.\scripts\setup-env.ps1 -Command setup -Environment development

# Setup production environment
.\scripts\setup-env.ps1 -Command setup -Environment production

# Validate current environment
.\scripts\setup-env.ps1 -Command validate
```

### Linux/macOS (Bash)
```bash
# Make script executable
chmod +x scripts/setup-env.sh

# Setup development environment
./scripts/setup-env.sh setup development

# Setup production environment
./scripts/setup-env.sh setup production

# Validate current environment
./scripts/setup-env.sh validate
```

## Manual Setup

1. Copy the appropriate environment file:
   ```bash
   cp .env.development .env    # For development
   cp .env.production .env     # For production
   ```

2. Edit the `.env` file and replace placeholder values:
   - Database connection strings
   - Email service credentials
   - Domain names
   - Service API keys

## Critical Production Setup

### 1. Generate Secure Secrets
```bash
# Generate 32-character random strings for:
openssl rand -base64 32 | tr -d "=+/" | cut -c1-32
```

Replace these placeholders in `.env.production`:
- `REPLACE-WITH-SECURE-32-CHAR-SECRET-GENERATED-BY-openssl-rand-base64-32`
- `REPLACE-WITH-SECURE-32-CHAR-KEY-FOR-ASSET-ENCRYPTION`
- `REPLACE-WITH-SECURE-JWT-SECRET-MINIMUM-32-CHARACTERS`
- `REPLACE-WITH-BACKUP-ENCRYPTION-KEY`

### 2. Database Configuration
Update `DATABASE_URL` with your production database:

**PostgreSQL:**
```
DATABASE_URL="postgresql://username:password@host:port/database_name?schema=public"
```

**MySQL:**
```
DATABASE_URL="mysql://username:password@host:port/database_name"
```

### 3. Domain Configuration
Update all domain references:
- `NEXTAUTH_URL="https://mydigitallegacyvault.com"`
- `CORS_ORIGINS="https://mydigitallegacyvault.com,https://mydigitallegacyvault.com.au"`
- `COOKIE_DOMAIN=".mydigitallegacyvault.com"`

### 4. Email Service Setup
Configure your email provider:

**SMTP Example:**
```
EMAIL_PROVIDER="smtp"
SMTP_HOST="smtp.your-provider.com"
SMTP_PORT=587
SMTP_USER="your-username"
SMTP_PASS="your-password"
```

**SendGrid Example:**
```
EMAIL_PROVIDER="sendgrid"
SENDGRID_API_KEY="your-sendgrid-api-key"
```

## Environment Variables Reference

### Core Application
| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment type | `production` |
| `APP_NAME` | Application name | `MyDigitalLegacy Vault` |
| `APP_VERSION` | Application version | `1.0.0` |

### Database
| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Database connection string | Yes |

### Authentication & Security
| Variable | Description | Required |
|----------|-------------|----------|
| `NEXTAUTH_SECRET` | NextAuth.js secret | Yes |
| `NEXTAUTH_URL` | Application URL | Yes |
| `ENCRYPTION_KEY` | Asset encryption key | Yes |
| `JWT_SECRET` | JWT signing secret | Yes |

### File Upload
| Variable | Description | Default |
|----------|-------------|---------|
| `MAX_FILE_SIZE` | Maximum file size (bytes) | `10485760` |
| `UPLOAD_DIR` | Upload directory | `/app/uploads` |

### Email
| Variable | Description | Required |
|----------|-------------|----------|
| `EMAIL_PROVIDER` | Email service provider | Yes |
| `EMAIL_FROM` | From email address | Yes |
| `SMTP_HOST` | SMTP server host | If using SMTP |
| `SMTP_PORT` | SMTP server port | If using SMTP |
| `SMTP_USER` | SMTP username | If using SMTP |
| `SMTP_PASS` | SMTP password | If using SMTP |

### Security
| Variable | Description | Default |
|----------|-------------|---------|
| `RATE_LIMIT_REQUESTS` | Requests per window | `50` |
| `RATE_LIMIT_WINDOW` | Rate limit window (ms) | `900000` |
| `SESSION_MAX_AGE` | Session duration (seconds) | `86400` |
| `COOKIE_SECURE` | Secure cookies only | `true` |
| `FORCE_HTTPS` | Force HTTPS redirects | `true` |

## Environment Validation

The setup scripts automatically validate that all required environment variables are present. You can also manually validate:

```bash
# Check if all required variables are set
grep -E "^(DATABASE_URL|NEXTAUTH_SECRET|NEXTAUTH_URL|ENCRYPTION_KEY|JWT_SECRET)=" .env
```

## Security Checklist

### Development ✅
- [ ] Environment file copied
- [ ] Database accessible
- [ ] Application starts without errors

### Staging ✅
- [ ] All development requirements met
- [ ] HTTPS enabled
- [ ] Test email provider configured
- [ ] Staging domain configured

### Production ✅
- [ ] All staging requirements met
- [ ] Secure secrets generated (32+ characters)
- [ ] Production database configured
- [ ] Production email service configured
- [ ] Domain DNS configured
- [ ] SSL/TLS certificates installed
- [ ] CORS origins restricted
- [ ] Rate limiting enabled
- [ ] Monitoring and logging configured
- [ ] Backup systems in place
- [ ] Security headers enabled

## Troubleshooting

### Common Issues

**Database Connection Failed:**
- Check `DATABASE_URL` format
- Verify database server is running
- Check network connectivity and firewall rules

**Authentication Errors:**
- Verify `NEXTAUTH_SECRET` is set and secure
- Check `NEXTAUTH_URL` matches your domain
- Ensure HTTPS is properly configured in production

**File Upload Issues:**
- Check `UPLOAD_DIR` permissions
- Verify `MAX_FILE_SIZE` settings
- Ensure disk space is available

**Email Not Sending:**
- Verify email provider credentials
- Check `EMAIL_FROM` address is valid
- Test SMTP connectivity

### Getting Help

1. Check application logs
2. Validate environment configuration
3. Review security requirements
4. Test individual components

## Best Practices

1. **Never commit `.env` files to version control**
2. **Use different secrets for each environment**
3. **Regularly rotate production secrets**
4. **Monitor environment variable access**
5. **Backup environment configurations securely**
6. **Use infrastructure as code for production**