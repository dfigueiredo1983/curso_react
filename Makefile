help:
	@echo "Comandos disponíveis:"
	@echo "	make status"
	@echo "	make push"
	@echo " make pull"
	@echo "	make remote"

status:
	git status

push:
	git add .
	git commit -m "$(m)"
	git push -u origin main

pull:
	git pull -u origin main

remote:
	git remote -v
