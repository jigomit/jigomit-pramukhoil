# Start Vite Dev Server
Write-Host "Starting Vite development server..." -ForegroundColor Green
Write-Host "Please keep this window open while the server is running." -ForegroundColor Yellow
Write-Host ""
Write-Host "Once you see 'Local: http://localhost:5173', open that URL in Chrome." -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server." -ForegroundColor Yellow
Write-Host ""

cd $PSScriptRoot
npm run dev

