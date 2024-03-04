# Setup and development

- [Setup and development](#setup-and-development)
  - [First-time setup](#first-time-setup)
  - [Installation](#installation)
    - [Database](#database)
    - [Configuration](#configuration)
    - [Dev server](#dev-server)
  - [Generators](#generators)
  - [Naming & cheatsheet](#naming-cheatsheet)

## First-time setup

Make sure you have the following installed:

- [Node](https://nodejs.org/en/) (at least the latest LTS)
- [Docker Compose](https://docs.docker.com/compose/) (at least 2.23.3)

## Installation

```bash
# Install dependencies from package.json
pnpm install
```

> Note: don't delete pnpm.lock before installation

### Database

> [TypeORM](https://github.com/typeorm/typeorm)

### Configuration

#### MySQL

Before start fill correct configurations in `.env.dev` file in sources

apps/...

```env
DB_HOST=""
DB_PORT=""
DB_USERNAME=""
DB_PASSWORD=""
DB_DATABASE=""
DB_SYNC=""
PORT=
```

### Dev server

```bash
# Launch dev
docker compose up --build --wait -d

# Launch watch
docker compose watch
```

## Generators

This project includes generators to speed up common development tasks. Commands include:

> Note: Make sure you already have the [hygen](https://www.hygen.io/) globally installed

```bash
# Install nest-cli globally
pnpm install -g hygen
```

For React:

```bash
# Generate a new service
hygen ui-module new
```

For Nestjs:

```bash
# Generate a new service
hygen api-module new
```
