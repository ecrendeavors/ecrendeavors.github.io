rm favicon.ico
rm index.html
rm precahce*
rm service-worker.js
rm .\images\*
rmdir images
rm .\static\*
rmdir static
rm 
cd src
npm run build
mv build\* ..\
cd ..\