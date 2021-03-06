build:
	powershell "ls -exclude src,CNAME,makefile,README.md | foreach { Remove-Item $$_.fullname -Force -Recurse }"
	powershell 'cd src; npm run build'
	powershell 'cp -r .\src\build\* .\'
	powershell 'mkdir tos'
	powershell 'mkdir privacy'
	powershell 'cp .\index.html tos'
	powershell 'cp .\index.html privacy'
