Passos para utilizar:

### 1 - Baixe o Repositório

### 2 - Rode o comando:
    npm install
   Este comando irá instalar as dependências do projeto na sua máquina

### 3 - Rode o comando:
    npx prisma migrate dev
  Este comando irá gerar as migrations automaticamente, ou seja, irá criar as tabelas necessárias no banco, de forma automática

### 4 - Rode o comando:
    docker-compose up
  #### Este comando será responsável por fazer o download do Banco Redis
  #### OBS: Apesar de ter o postgresSql no arquivo "docker.file", ele não é uma dependência necessária para o projeto.
    #### Neste Projeto utilizou-se o Sqlite. No entanto se quiser utilizar o Postgres, é só mudar o provider do prisma
    ###De Sqlite para Postgres (automaticamente será gerá gerada uma url do postgres no arquivo ".env"
  #### ATT: Precisa ter o docker instalado na sua máquina.
