@echo off
REM ===== Change to your repository directory =====
cd /d "C:\Users\mvsla\Documents\tejastechhub.github.io"

REM ===== Stage all changes =====
git add .

REM ===== Commit the changes (skip if nothing to commit) =====
git commit -m "Auto-update projects and pages" 2>nul || echo Nothing to commit

REM ===== Push to GitHub =====
git push origin main

REM ===== Done =====
echo All updates pushed to GitHub!
pause
