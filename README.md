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

Install reactjs

```bash
npx nx add @nx/react
npx nx g @nx/react:app apps/front-end
```

Install nextjs

```bash
npx nx add @nx/nest
npx nx g @nx/nest:app apps/back-end
```

```bash
# Install dependencies from package.json
pnpm install
```

> Note: don't delete pnpm.lock before installation

### Database

> [TypeORM](https://github.com/typeorm/typeorm)

### Configuration

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

If you using react + vite, please follow the guidelines configured below

#### project.json

```json
{
  "name": "front-end",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "app/front-end/src",
  "projectType": "application",
  "targets": {
    "build": {
      "executor": "@nx/vite:build",
      "outputs": ["{options.outputPath}"],
      "defaultConfiguration": "production",
      "options": {
        "outputPath": "dist/apps/front-end"
      },
      "configurations": {
        "development": {
          "mode": "development"
        },
        "production": {
          "mode": "production"
        }
      }
    },
    "serve": {
      "executor": "@nx/vite:dev-server",
      "defaultConfiguration": "development",
      "options": {
        "buildTarget": "front-end:build"
      },
      "configurations": {
        "development": {
          "buildTarget": "front-end:build:development",
          "hmr": true
        },
        "production": {
          "buildTarget": "front-end:build:production",
          "hmr": false
        }
      }
    },
    "preview": {
      "executor": "@nx/vite:preview-server",
      "defaultConfiguration": "development",
      "options": {
        "buildTarget": "front-end:build"
      },
      "configurations": {
        "development": {
          "buildTarget": "front-end:build:development"
        },
        "production": {
          "buildTarget": "front-end:build:production"
        }
      }
    },
    "test": {
      "executor": "@nx/vite:test",
      "outputs": ["{options.reportsDirectory}"],
      "options": {
        "reportsDirectory": "../../coverage/apps/front-end"
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint",
      "outputs": ["{options.outputFile}"]
    },
    "serve-static": {
      "executor": "@nx/web:file-server",
      "options": {
        "buildTarget": "front-end:build"
      }
    }
  },
  "tags": []
}
```

If you using nestjs + webpack, please follow the guidelines configured below

```json
{
  "name": "back-end",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "apps/back-end/src",
  "projectType": "appslication",
  "targets": {
    "build": {
      "executor": "@nx/webpack:webpack",
      "outputs": ["{options.outputPath}"],
      "defaultConfiguration": "production",
      "options": {
        "target": "node",
        "compiler": "tsc",
        "outputPath": "dist/apps/back-end",
        "main": "apps/back-end/src/main.ts",
        "tsConfig": "apps/back-end/tsconfig.apps.json",
        "assets": ["apps/back-end/src/assets"],
        "webpackConfig": "apps/back-end/webpack.config.js",
        "isolatedConfig": true,
        "buildLibsFromSource": true,
        "generatePackageJson": true
      },
      "configurations": {
        "development": {},
        "production": {}
      }
    },
    "serve": {
      "executor": "@nx/js:node",
      "defaultConfiguration": "development",
      "options": {
        "buildTarget": "back-end:build"
      },
      "configurations": {
        "development": {
          "buildTarget": "back-end:build:development"
        },
        "production": {
          "buildTarget": "back-end:build:production"
        }
      }
    },
    "lint": {
      "executor": "@nx/eslint:lint",
      "outputs": ["{options.outputFile}"]
    },
    "test": {
      "executor": "@nx/jest:jest",
      "outputs": ["{workspaceRoot}/coverage/{projectRoot}"],
      "options": {
        "jestConfig": "apps/back-end/jest.config.ts"
      }
    }
  },
  "tags": []
}
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
