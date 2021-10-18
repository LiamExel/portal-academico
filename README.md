# portal-academico

### Configuração para utilizar o npm (NA ESCOLA)
npm set strict-ssl false
npm config set registry https://registry.npmjs.org/

### Configuração para envio ao gitHub (NA ESCOLA)
git config --global http.sslVerify false

# Dependências

npm i passport passport-local express-session bcryptjs

passport
(http://passportjs.org/docs/downloads/html)

O Passport reconhece que cada aplicativo tem requisitos exclusivos de autenticação. Os mecanismos de autenticação, conhecidos como estratégias, são embalados como módulos individuais. Os aplicativos podem escolher quais estratégias empregar, sem criar dependências necessárias.

Passport-local
(http://www.passportjs.org/packages/passport-local/)
Estratégoas de passport para autenticação com nome de usuário e senha.
Este módulo permite autenticar usando um nome de usuário e senha em seus aplicativos Node.js.



