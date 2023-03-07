# Docker Setup

BotMate server can be setup using Docker. You can use the following `docker-compose.yaml` file to setup BotMate server. It uses the official Postgres image and the latest BotMate image. You can change the environment variables to suit your needs.

Follow the steps below to setup BotMate server using Docker.

### Step 1. Install Docker

If you don't have Docker installed, you can install it from [here](https://docs.docker.com/install/).

### Step 2. Install Docker Compose

If you don't have Docker Compose installed, you can install it from [here](https://docs.docker.com/compose/install/).

### Step 3. Create a `docker-compose.yaml` file in a directory of your choice

```yaml
version: '3.1'

services:
  db:
    image: postgres:14.1-alpine
    restart: always
    environment:
      POSTGRES_PASSWORD: securepassword
      POSTGRES_DB: botmate

  botmate:
    image: xencodes/botmate:latest
    environment:
      DB_HOST: db
      DB_PORT: 5432
      DB_USERNAME: postgres
      DB_PASSWORD: securepassword
      DB_NAME: botmate
    depends_on:
      - db
    ports:
      - 8080:8080
```

### Step 4. Run `docker-compose up`

This will start the BotMate server and the database. You can access the server at `http://localhost:8080`.
