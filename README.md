# Getting Started with React and Express app

This projet was created with React and Express for API

You can start the project with docker or directly running each service manually.

## Run with Docker
---

- Go the project root and run:

  ```
  $ docker-compose up
  ```
- Go to `localhost:3000`.

- The API will be runnning in `localhost:4000`.
- To run the react app tests run:
  ```
  $ docker-compose run --rm frontend yarn test
  ```
- To run the API tests run:
  ```
  $ docker-compose run --rm api yarn test
  ```

## Run Manually
---
### Start the API
 <br/>

- Go to folder `/api`.

- Install dependencies:
  ```
  $ yarn
  ```

- To start the API run, and it will be running in `localhost:4000`.:
  ```
  $ yarn start
  ```

- To run tests:
  ```
  $ yarn test
  ```
<br/>

### Start React App
<br />

- Go to folder `/frontend`.

- Install dependencies:
  ```
  $ yarn
  ```

- Start react project, then go to `localhost:3000`:
  ```
  $ yarn start
  ```

- To run tests:
  ```
  $ yarn test
  ```

## Troubleshooting
---

In case docker-compose doesn't work in windows, update the fronend service in `docker-compose.yaml`, it should lool like this:
```yaml
version: "3.8"
services:
  api:
    build: ./api
    container_name: api_c
    ports:
      - '4000:4000'
    volumes:
      - ./api:/app
      - /app/node_modules
  frontend:
    build: ./frontend
    container_name: frontend_c
    ports:
      - '3000:3000'
    stdin_open: true
    tty: true
```


