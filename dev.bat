@echo off
echo Setting up Node.js environment variables...
SET "PATH=C:\Program Files\nodejs;%PATH%"

echo Checking Node version...
node --version
echo Checking NPM version...
npm --version

echo.
echo Installing dependencies (if missing)...
call npm install

echo.
echo Starting Development Server...
call npm run dev
pause
