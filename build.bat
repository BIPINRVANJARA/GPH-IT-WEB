@echo off
echo Setting up Node.js environment variables...
SET "PATH=C:\Program Files\nodejs;%PATH%"

echo Building Project...
call npm run build

echo.
echo Build complete! Check 'dist' folder.
pause
