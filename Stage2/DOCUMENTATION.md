# API Documentation

This document provides detailed information about the API endpoints, request/response formats, sample usage, limitations, and setup instructions.

## API Endpoints

### 1. Create a Person Resource

- **Endpoint:** `/api`
- **Method:** `POST`
- **Access:** Public

#### Request

- Request Body:

  ```json
  {
    "name": "Mark Essein"
  }
  ```

#### Response

- `201 Created` if the person is successfully created:

  ```json
  {
    "success": "user saved successfull",
    "data": {
      "name": "Mark Essein",
      "_id": "65047088ae850386b9778aa0",
      "__v": 0
    }
  }
  ```

- `400 Bad Request` if the request body is missing or not valid:

  ```json
  {
    "error": "Missing \"name\" field or wrong data type(must be a string)"
  }
  ```

- `500 Internal Server Error` for any other server-related errors.

### 2. Get a Person Resource

- **Endpoint:** `/api/:userId`
- **Method:** `GET`
- **Access:** Public

#### Request

Only The `userId` parameter should be included in the URL.

#### Response

- `200 OK` if the user is found:

  ```json
  {
    "success": "Person found",
    "data": {
      "_id": "6504734dd769f51f8a06d3c4",
      "name": "Mark Essein 2",
      "__v": 0
    }
  }
  ```

- `404 Not Found` if the user is not found:

  ```json
  {
    "error": "Person not found"
  }
  ```

- `400 Bad Request` if `userId` is not in a valid MongoDB ObjectId:

  ```json
  {
    "error": "Invalid id"
  }
  ```

- `500 Internal Server Error` for any other server-related errors.

### 3. Update a Person Resource

- **Endpoint:** `/api/:userId`
- **Method:** `PUT`
- **Access:** Public

#### Request

- Request Body:

  ```json
  {
    "name": "Updated Name"
  }
  ```

#### Response

- `200 OK` if the person is successfully updated:

  ```json
  {
    "success": "Person Updated Successfully",
    "data": {
      "_id": "6504734dd769f51f8a06d3c4",
      "name": "mark Esein 50",
      "__v": 0
    }
  }
  ```

- `404 Not Found` if the user is not found:

  ```json
  {
    "error": "Person not found"
  }
  ```

- `500 Internal Server Error` for any other server-related errors.

### 4. Delete a Person Resource

- **Endpoint:** `/api/:userId`
- **Method:** `DELETE`
- **Access:** Public

#### Request

No request body is required. The `userId` parameter should be included in the URL.

#### Response

- `200 OK` if the person is successfully deleted:

  ```json
  {
    "success": "Person Deleted successfully",
    "data": {
      "_id": "6504734dd769f51f8a06d3c4",
      "name": "mark Esein 50",
      "__v": 0
    }
  }
  ```

- `404 Not Found` if the user is not found:

  ```json
  {
    "message": "User not found."
  }
  ```

- `400 Bad Request` if `userId` is not in a valid MongoDB ObjectId:

  ```json
  {
    "error": "Person not found"
  }
  ```

- `500 Internal Server Error` for any other server-related errors.

## Example Usage

### Create a Person Resource (POST)

**Request:**

```http
POST /api
Content-Type: application/json

{
  "name": "Mark Essein"
}
```

**Response (201 Created):**

```json
{
  "success": "user saved successfull",
  "data": {
    "name": "Mark Essein",
    "_id": "6504734dd769f51f8a06d3c4",
    "__v": 0
  }
}
```

### Get a Person Resource (GET)

**Request:**

```http
GET /api/6504734dd769f51f8a06d3c4
```

**Response (200 OK):**

```json
{
  "success": "Person found",
  "data": {
    "_id": "6504734dd769f51f8a06d3c4",
    "name": "Mark Essein 2",
    "__v": 0
  }
}
```

### Update a Person Resource (PUT)

**Request:**

```http
PUT /api/1234567890
Content-Type: application/json

{
  "name": "mark Esein 50"
}
```

**Response (200 OK):**

```json
{
  "success": "Person Updated Successfully",
  "data": {
    "_id": "6504734dd769f51f8a06d3c4",
    "name": "mark Esein 50",
    "__v": 0
  }
}
```

### Delete a Person Resource (DELETE)

**Request:**

```http
DELETE /api/6504734dd769f51f8a06d3c4
```

**Response (200 OK):**

```json
{
  "success": "Person Deleted successfully",
  "data": {
    "_id": "6504734dd769f51f8a06d3c4",
    "name": "Mark Essein 2",
    "__v": 0
  }
}
```

## Testing

API endpoints can be tested easily using [Postman](https://documenter.getpostman.com/view/20635269/2s9YC5zYca) Docs

<mark>For more detailed setup instructions see</mark>: [README.md](./README.md)

Ensure that you have Node.js and MongoDB installed on your system before proceeding with the setup.
