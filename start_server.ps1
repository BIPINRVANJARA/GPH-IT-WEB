$env:Path = "C:\Program Files\nodejs;" + $env:Path
Write-Host "Starting Government Polytechnic Himatnagar IT Website..." -ForegroundColor Cyan
& "C:\Program Files\nodejs\npm.cmd" run dev
