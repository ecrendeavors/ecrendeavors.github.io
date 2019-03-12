build:
	powershell "ls -exclude src,CNAME,makefile,README.md | foreach { Remove-Item $$_.fullname -Force -Recurse }"
	powershell 'cd src; npm run build'
	powershell 'cp -r .\src\build\* .\'
