# Usage: .\browser-sync-start.ps1
# In preferred directory root
# This script runs Browser-Sync on port 3000 with python server on
# port 8000 as proxy

# Run Python server on port 8000
Write-Host "Starting Python server on port 8000"
Start-Process powershell -ArgumentList @"
python -m http.server 8000
"@
Write-Host " "

Start-Sleep -Seconds 3

# Start Browser-Sync on port 3000
Write-Host "Staring Browser-Sync"
& browser-sync start --proxy 'http://localhost:8000' --port 3000 --files '**/*.html' '**/*.css' '**/*.js' '!**/*.ps1'

# '.' for all files in the directory
# Below is specific file type in any directory
# '**/*.html' '**/*.css' '**/*.js'
