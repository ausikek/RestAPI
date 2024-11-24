# RestAPI
Simple REST-Api with Express, Node and Prisma

Create a .env in the root directory:

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

# ###### GENERAL SETTINGS #######
PROJECT_NAME=restapi

# ###### SERVER SETTINGS #######
SERVER_PORT=3001
NODE_ENV=development

# ###### DATABASE SETTINGS #######
DATABASE_TYPE=postgres
DATABASE_HOST=${PROJECT_NAME}-db
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=docker
DATABASE_DB=${PROJECT_NAME}

DATABASE_URL=${DATABASE_TYPE}://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_DB}
```
