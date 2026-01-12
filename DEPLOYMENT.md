# SAK Fasteners - Hostinger VPS Deployment Guide

## 📋 Prerequisites
- SSH key at `~/.ssh/hostinger_ed25519`
- Git repository initialized
- Node.js 18+ and PM2 installed on server

---

## 🚀 ONE-TIME SERVER SETUP

### 1. SSH into Hostinger VPS
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228
```

### 2. Create Project Directory
```bash
sudo mkdir -p /var/www/sakfasteners
sudo chown -R qutubk:qutubk /var/www/sakfasteners
cd /var/www/sakfasteners
```

### 3. Clone Repository
```bash
git clone https://github.com/qutubkothari/sakfasteners.git .
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Build Next.js Application
```bash
npm run build
```

### 6. Create Logs Directory
```bash
mkdir -p logs
```

### 7. Start with PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 8. Configure Nginx
```bash
# Copy nginx config
sudo cp nginx-sakfasteners.conf /etc/nginx/sites-available/sakfasteners

# Enable site
sudo ln -s /etc/nginx/sites-available/sakfasteners /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### 9. Open Port 8056 (if firewall is active)
```bash
sudo ufw allow 8056/tcp
```

### 10. Setup SSL (After DNS points to server)
```bash
# Install certbot (if not installed)
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d www.sakfasteners.com -d sakfasteners.com

# Auto-renewal is configured automatically
```

---

## 🔄 AUTOMATED DEPLOYMENT

After one-time setup, deploy updates with:

```powershell
.\deploy.ps1 -Message "Your commit message"
```

Or simply:
```powershell
.\deploy.ps1
```

The script will:
1. ✅ Check SSH key
2. ✅ Commit and push to GitHub
3. ✅ Test server connection
4. ✅ Pull latest code on server
5. ✅ Install dependencies
6. ✅ Build Next.js production bundle
7. ✅ Restart PM2 process

---

## 🌐 DNS CONFIGURATION

Point your domain to Hostinger VPS:

### A Records
```
Type: A
Host: @
Value: 72.62.192.228
TTL: 3600

Type: A
Host: www
Value: 72.62.192.228
TTL: 3600
```

### CNAME (Alternative for www)
```
Type: CNAME
Host: www
Value: sakfasteners.com
TTL: 3600
```

---

## 🛠️ USEFUL COMMANDS

### Check PM2 Status
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228 'pm2 status'
```

### View Logs
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228 'pm2 logs sakfasteners'
```

### Restart Application
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228 'pm2 restart sakfasteners'
```

### Monitor Resources
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228 'pm2 monit'
```

### Stop Application
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228 'pm2 stop sakfasteners'
```

### Delete PM2 Process
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228 'pm2 delete sakfasteners'
```

### Check Nginx Status
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228 'sudo systemctl status nginx'
```

### Test Nginx Config
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228 'sudo nginx -t'
```

### View Nginx Logs
```bash
ssh -i ~/.ssh/hostinger_ed25519 qutubk@72.62.192.228 'tail -f /var/log/nginx/sakfasteners-access.log'
```

---

## 🔍 TROUBLESHOOTING

### Port 8056 Not Accessible
```bash
# Check if app is running
pm2 status

# Check port binding
netstat -tulpn | grep 8056

# Check firewall
sudo ufw status
```

### Build Failures
```bash
# Clear Next.js cache
cd /var/www/sakfasteners
rm -rf .next
npm run build
```

### Memory Issues
```bash
# Increase PM2 memory limit in ecosystem.config.js
max_memory_restart: '1G'

# Restart
pm2 restart sakfasteners
```

### SSL Certificate Renewal
```bash
# Certificates auto-renew, but to manually renew:
sudo certbot renew

# Test renewal
sudo certbot renew --dry-run
```

---

## 📊 MONITORING

### Setup PM2 Web Dashboard (Optional)
```bash
pm2 install pm2-server-monit
```

### Enable Keymetrics (Optional)
```bash
pm2 link [secret-key] [public-key]
```

---

## 🔐 SECURITY CHECKLIST

- ✅ SSH key authentication only (no password)
- ✅ Port 8056 only accessible via nginx reverse proxy
- ✅ SSL/TLS encryption (after certbot)
- ✅ Security headers in nginx config
- ✅ PM2 process isolation
- ✅ Regular dependency updates (`npm audit fix`)
- ✅ Firewall configured (ufw)

---

## 📈 PERFORMANCE OPTIMIZATION

1. **Nginx Caching** - Static assets cached for 30 days
2. **Gzip Compression** - Enabled for text files
3. **HTTP/2** - Enabled for faster loading
4. **PM2 Clustering** - Can enable if traffic increases
5. **CDN** - Consider Cloudflare for global edge caching

---

## 🆘 SUPPORT

If deployment fails, check:
1. SSH key permissions: `chmod 600 ~/.ssh/hostinger_ed25519`
2. Git credentials configured
3. Server disk space: `df -h`
4. PM2 logs: `pm2 logs sakfasteners --lines 50`

---

**Deployment Version:** 1.0.0  
**Last Updated:** January 12, 2026  
**Server:** Hostinger VPS (72.62.192.228)  
**Port:** 8056  
**PM2 Process:** sakfasteners
