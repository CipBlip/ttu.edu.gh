# Usage: .\live-server.ps1
# Start python server on port 8080 
Write-Host "Starting python server on port 8080"
Start-Process powershell -ArgumentList @'
python -m http.server 8080
'@
Write-Host " "

Write-Host "Starting Browser-Sync on port 3000"
# Start brower-sync on port 3000
& browser-sync start --proxy http://localhost:8080 --port 3000 --files '**/*.html' '**/*.css' '**/*.js' '!**/*.ps1'