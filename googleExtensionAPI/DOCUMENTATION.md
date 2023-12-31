# Google extension Screen Recorder API

## Postman documentation: <https://documenter.getpostman.com/view/20635269/2s9YJc1Nay>

**Base URL**:
<https://hngix.cyclic.cloud/api>,
<http://localhost:3000/api>

**Endpoints**:
https://hngix.cyclic.cloud/api/start-recording

1. **Start recording**

   - **Endpoint**: `https://hngix.cyclic.cloud/api/start-recording`
   - **Local Endpoint**: `http://localhost:3000/api/start-recording`
   - **Method**: POST
   - **Request Format**:

     - Content-Type: multipart/form-data

     - Body: File (Video File)

   ```json
   {
     "mimetype": "video/webm"
   }
   ```

   - **Response Format**:

     - Status Code: 200 OK
     - Body: JSON

     ```json
     {
       "sessionId": "ashd-2u48-wjdn"
     }
     ```

   - **Description**: Generate upload session with server.

2. **Record video chunks**

   - **Endpoint**: `https://hngix.cyclic.cloud/api/record-data/:sessionId`
   - **Method**: POST
   - **Request Format**:

     - URL Parameter: sessionId (UUID) - The unique identifier of the uploaded video.
     - Body: dataChunk(base64 string) - Blob object converted to base64

     ```json
     {
       "dataChunk": "data"
     }
     ```

   - **Response Format**:

     - Status Code: 200 OK
     - Body: JSON

     ```json
     {
       "message": "Data received and saved"
     }
     ```

   - **Description**: Send video chunks

3. **Stop Recording**

   - **Endpoint**: `https://hngix.cyclic.cloud/api/stop-recording/sessionId`
   - **Method**: POST
   - **Request Format**:
     - URL Parameter: sessionId (UUID) - The unique identifier of the uploaded video.
   - **Response Format**:

     - Status Code: 200 OK
     - Body: No

     ```json
     {
       "message": "Recording stopped and saved"
     }
     ```

   - **Description**: Retrieve a vidoe.

**Example Usage**:

- Start Recording:

  - Request:

    ```json
    POST https://hngix.cyclic.cloud/api/start-recording
    Content-Type: application/json
    Body: mimetype (ex "video/webm")
    ```

  - Response:
    200 OK

    ```json
    {
      "sessionId": "UUID string"
    }
    ```

- Record Data:

  - Request:

    ```json
    POST https://hngix.cyclic.cloud/api/record-data/:sessionId
    Content-Type: application/json
    Body: dataChunk (base64 string)
    ```

  - Response:
    200 OK

    ```json
    {
      "message": "Data received and saved"
    }
    ```

- Stop recording:

  - Request:

    ```json
    POST https://hngix.cyclic.cloud/api/stop-recording/:sessionId
    Content-Type: application/json
    Body: No Body
    ```

  - Response:
    200 OK

    ```json
    {
      "message": "Recording received and saved"
      <!-- "videoURL": "http://domain.com/video.mp4" -->
    }
    ```

**Additional Information**:

- This API does not require authentication, as per the task requirements.
- The uploaded videos are stored on the server's file system.
