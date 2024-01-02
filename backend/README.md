# BellSant Machine Health API

Welcome to the BellSant Machine Health API! This API allows you to evaluate the health of various machines and their components based on provided data. This README provides instructions on how to set up and use the API.

## Prerequisites

Before you get started, make sure you have the following prerequisites installed on your system:

- Node.js: [Download Node.js](https://nodejs.org/)
- Yarn (optional but recommended, can use NPM instead): [Install Yarn](https://classic.yarnpkg.com/en/docs/install/)

## Installation

Follow these steps to set up the BellSant Machine Health API:

1. Navigate to the project directory:

   ```bash
   cd api
   ```

2. Install dependencies using Yarn (or npm if you prefer):

   ```bash
   yarn
   ```

## Usage

### Starting the API

To start the API, run the following command:

```bash
yarn start
```

The API will be accessible at `http://localhost:3001` by default. You can change the port or other configurations in the `app.ts` file.

### Evaluating Machine Health

You can evaluate the health of a machine by sending a POST request to the `/machine-health` endpoint. Here's an example using cURL:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "machines": {
    "weldingRobot": {
      "errorRate": "0.5",
      "vibrationLevel": "2.5"
    }
  }
}' http://localhost:3001/machine-health
```

The response will include the machine name and its health score.

### API Endpoints

- `POST /machine-health`: Calculate the health of a machine based on provided data.

## Testing

You can add and run tests to ensure the correctness of the API. Follow these steps to add tests:

1. Locate the "tests" folder

2. Inside the "tests" folder, you can create test files for your code. You can use testing libraries like Jest, Mocha, or others to write your tests. There is a starter example test to help you get started.

3. To run the tests, use the following command:

   ```bash
   yarn test
   ```

## Customization

You can customize machine data and health evaluation logic by modifying the `machineData.json` file and the calculation functions in `app.ts`.

Assessment Solution:

# Clone the repo

Clone the repo from the Link: https://github.com/Sowri19/EngineeringChallenge

# How to run:

After cloning the repo, run the following commands in the terminal

1. cd backend
2. yarn install
3. yarn start
4. The server will be running on port 3001

# Packages used:

1. express
2. cors
3. firebase-admin sdk

I have used firebase Admin SDK and used to store the scores to the firestore database as a persistant database. add I have added the uid and timestamp to the database to identify the user and the time of the score.

Post method: The front end will call the api with the uid and the score and the api will store the score to the database.
Get method: The front end will call the api with the uid and the api will return the scores of the user.
delete method: The front end will call the api with the uid and the api will delete the scores of the user.

After following steps now go the frontend folder and run the commands in the README.md file of the frontend folder.
