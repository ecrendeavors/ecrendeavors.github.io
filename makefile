build:
	powershell "ls -exclude src,CNAME,makefile | foreach { Remove-Item $$_.fullname -Force -Recurse }"
	powershell 'cd src; npm run build'
	powershell 'cp .\src\build\* .\'