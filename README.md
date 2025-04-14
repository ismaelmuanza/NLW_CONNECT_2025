
⚠️ ** Atenção: Leia bem as instruções abaixo para poder rodar o projeto sem problemas **  <br>

## Passos a utilizar:

### 1 - Baixe o Repositório

### 2 - Instale as dependências
    npm install
   Este comando irá instalar as dependências do projeto na sua máquina

### 3 - Rode o comando
    npx prisma migrate dev
Este comando irá gerar as migrations automaticamente, ou seja, irá criar as tabelas necessárias no banco de dados, de forma automática

### 4 - Rode o comando
    docker-compose up
###### Este comando será responsável por fazer o download do Banco Redis

> 💡 **Dica Opcional:**  
> Apesar de o **PostgreSQL** estar incluído no arquivo `Dockerfile`, ele **não é uma dependência obrigatória** para este projeto.  
> Atualmente, este projeto utiliza o **SQLite** como banco de dados padrão.  
>  
> 🔄 Se preferir usar o **PostgreSQL**, basta alterar o `provider` no arquivo `schema.prisma` de `sqlite` para `postgres`.  
> Isso **gerará automaticamente** uma nova URL do PostgreSQL no arquivo `.env`.  
>  Caso não queria utilizar o postgres, pôde deletar do arquivo `Dockerfile`
> 
> ⚠️ **Atenção:** É necessário ter o **Docker** instalado na sua máquina para utilizar o PostgreSQL via container.

##### Para executar/inicializar o redis utilize
    docker-compose start 
##### Parar o redis(os containers)
    docker-compose stop 

### 5 - Inicializar a aplicação
    npm run start:dev

### 📘 Documentação da API

Após inicializar a aplicação, acesse a rota: `/docs`<br>

> 🧪 Lá você encontrará uma **interface gráfica** para testar todas as rotas da API diretamente no navegador.

Essa interface facilita o entendimento da estrutura da API, permitindo enviar requisições `GET`, `POST`, `PUT`, `DELETE` e visualizar respostas de forma prática.



