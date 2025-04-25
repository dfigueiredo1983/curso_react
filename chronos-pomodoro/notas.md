## Instalar as dependências e executar o projeto
npm install
npm run dev

## Configurar o github
git config user.name "user.name"
git config user.email "seuemail@com.br"
git config core.eol lf
git config core.autocrlf input
git config --list --local

## Desfazer as alterações
git reset --hard

## Gerar chave ssh Linux Ubuntu
ssh-keygen -t rsa -b 4096 -C "seu_email@example.com"
escolha o local e o nome onde a chave vai se chamar e ser salva
local idel ~/.ssh/nome_arquivo_rsa

## Copiar a chave
cat ~/.ssh/id_rsa.pub

Adicionar chave ssh ao github em "SSH and GPG Keys"

git remote add origin repositório_github
git push origin main -u
- origin _ respositório remoto
- main _ branch que quer fazer o push
- -u para fazer o upstream sem indicar o repositório e a branch novamente


