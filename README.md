## HTTP NodeTS/Fastify Server 

Get all the Formula 1 2024 schedule from here.

## How to run

- Git clone on this repository (*HTTPS*): <br/>
> git clone https://github.com/murillo-nahas/f1schedule-server.git

- Install all the dependencies: <br/>
> npm install or yarn add

### Docker

Make sure you have Docker installed on your machine. If so, run the following command in the CLI:

> docker-compose up -d

### Prisma

Run Prisma migrations to create the tables:
> npx prisma migrate dev

### Running
- To run the server:
> npm start / npm run dev
- Running Prisma Studio:
> npm run studio

## Stack

- [x] Node.js;
- [x] TypeScript;
- [x] Fastify;
- [x] Linter (EsLint);
- [x] Prettier;

## Data Modeling

![data_modeling_f1schedule](https://github.com/murillo-nahas/data-structures/assets/71032453/73c5b350-ab86-4007-9138-5cf8adb38c14)

## Contributing

Feel free to contribute to this project by opening issues or pull requests.
