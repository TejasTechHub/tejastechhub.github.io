@echo off
cd /d "C:\Users\saisu\OneDrive\Desktop\TejaWebsite"

echo Running site generation...
node generate_subpages.js

echo Staging changes...
git add .

echo Committing changes...
git commit -m "Auto update: %DATE% %TIME%"

echo Pushing to GitHub...
git push origin main

echo Done. Website uploaded successfully!
pause
