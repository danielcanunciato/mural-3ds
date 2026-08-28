@echo off
set /p commit_msg="Enter your commit message: "

if "%commit_msg%"=="" (
    echo Error: Commit message cannot be empty!
    pause
    exit /b
)

git add .
git commit -m "%commit_msg%"
git push origin main

echo.
echo Git sequence completed successfully!
pause
