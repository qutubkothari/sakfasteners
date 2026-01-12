# Automated SAK Fasteners Deployment to Hostinger VPS
param(
    [string]$Message = "Deploy SAK Fasteners"
)

$ErrorActionPreference = "Stop"

Write-Host "`n===================================================" -ForegroundColor Cyan
Write-Host "   SAK FASTENERS TO HOSTINGER DEPLOYMENT" -ForegroundColor Green
Write-Host "===================================================`n" -ForegroundColor Cyan

# ====== CONFIG ======
$HOSTINGER_IP = "72.62.192.228"
$HOSTINGER_USER = "qutubk"
$KEY_PATH = "$env:USERPROFILE\.ssh\hostinger_ed25519"
$REMOTE_PATH = "/var/www/sakfasteners"
$PM2_PROCESS = "sakfasteners"
$PORT = "8056"

# ====== Helper Functions ======
function Test-SshKey {
    if (-not (Test-Path $KEY_PATH)) {
        Write-Host "ERROR: SSH key not found at: $KEY_PATH" -ForegroundColor Red
        throw "SSH key missing"
    }
    Write-Host "✓ SSH key found" -ForegroundColor Green
}

function Invoke-RemoteCommand {
    param([string]$Command)
    ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i $KEY_PATH "$HOSTINGER_USER@$HOSTINGER_IP" $Command
    if ($LASTEXITCODE -ne 0) {
        throw "Remote command failed"
    }
}

# ====== STEP 1: Pre-deployment Checks ======
Write-Host "[1/7] Pre-deployment Checks" -ForegroundColor Yellow
Test-SshKey
git status --short

# ====== STEP 2: Commit and Push ======
Write-Host "`n[2/7] Git Commit and Push" -ForegroundColor Yellow
git add .
git commit -m "$Message"
if ($LASTEXITCODE -ne 0) {
    Write-Host "No changes to commit" -ForegroundColor Yellow
}

git push
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Git push failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Code pushed to GitHub" -ForegroundColor Green

# ====== STEP 3: Test Connection ======
Write-Host "`n[3/7] Testing Connection" -ForegroundColor Yellow
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o ConnectTimeout=10 -i $KEY_PATH "$HOSTINGER_USER@$HOSTINGER_IP" "echo 'Connected'; node -v; pm2 -v"
Write-Host "✓ Connection OK" -ForegroundColor Green

# ====== STEP 4: Pull Latest Code ======
Write-Host "`n[4/7] Pulling Latest Code" -ForegroundColor Yellow
Invoke-RemoteCommand "cd $REMOTE_PATH && git pull origin main"
Write-Host "✓ Code updated on server" -ForegroundColor Green

# ====== STEP 5: Install Dependencies ======
Write-Host "`n[5/7] Installing Dependencies" -ForegroundColor Yellow
Invoke-RemoteCommand "cd $REMOTE_PATH && npm install --production=false"
Write-Host "✓ Dependencies updated" -ForegroundColor Green

# ====== STEP 6: Build Next.js ======
Write-Host "`n[6/7] Building Next.js Application" -ForegroundColor Yellow
Invoke-RemoteCommand "cd $REMOTE_PATH && npm run build"
Write-Host "✓ Production build complete" -ForegroundColor Green

# ====== STEP 7: Restart PM2 ======
Write-Host "`n[7/7] Restarting Application" -ForegroundColor Yellow
Invoke-RemoteCommand "cd $REMOTE_PATH && pm2 restart $PM2_PROCESS || pm2 start ecosystem.config.js"
Invoke-RemoteCommand "sleep 2 && pm2 list"
Write-Host "✓ Application restarted on port $PORT" -ForegroundColor Green

# ====== COMPLETE ======
Write-Host "`n===================================================" -ForegroundColor Cyan
Write-Host "   DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
Write-Host "===================================================`n" -ForegroundColor Cyan
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Configure nginx reverse proxy (see nginx-sakfasteners.conf)" -ForegroundColor Gray
Write-Host "2. Point domain to server: www.sakfasteners.com -> $HOSTINGER_IP" -ForegroundColor Gray
Write-Host "3. Setup SSL: certbot --nginx -d www.sakfasteners.com" -ForegroundColor Gray
Write-Host "`nMonitor logs: ssh -i $KEY_PATH $HOSTINGER_USER@$HOSTINGER_IP 'pm2 logs $PM2_PROCESS'" -ForegroundColor Gray
Write-Host "Check status: ssh -i $KEY_PATH $HOSTINGER_USER@$HOSTINGER_IP 'pm2 status'" -ForegroundColor Gray
Write-Host ""
