# HNGiX Stage 2 Task

## Description

A simple REST API capable of CRUD operations on a "person" resource that interfaces with a MongoDB Atlas database.

## Available Endpoints

| Route                 | Description                      |
| --------------------- | -------------------------------- |
| `GET` /api/:userId    | Fetch a person from the database |
| `POST` /api           | Create a new person              |
| `PUT` /api/:userId    | Update a person                  |
| `DELETE` /api/:userId | Delete a person                  |

## API Documentation

- [Postman Docs](https://documenter.getpostman.com/view/20635269/2s9YC5zYca)
- [Documentation](./DOCUMENTATION.md)

## Usage

clone project repository:

```bash
git clone https://github.com/ceasar28/HNGiX.git
cd Stage2
```

Install dependencies:

```bash
npm install
```

Create a `.env` with the values:

```bash
MONGO_CONNECTL=<replace-with-mongodb-connection-string>
```

Start up server:

```bash
npm run dev
```

The API will be available at <http://localhost:5000/api>
