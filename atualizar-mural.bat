@echo off
color 6
set /p commit_msg="Enter your commit message: "

if "%commit_msg%"=="" (
	color 4
    echo Error: Commit message cannot be empty!
    pause
    exit /b
)


color 8
git add .
git commit -m "%commit_msg%"
git push origin main

color 7
echo.
echo Git sequence completed successfully!