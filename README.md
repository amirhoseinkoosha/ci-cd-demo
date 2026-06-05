Continuous Testing in CI/CD using GitHub Actions

Overview

This project demonstrates how Continuous Testing can be implemented inside a CI/CD pipeline using GitHub Actions. The pipeline automatically runs static code analysis, unit tests, and integration tests whenever code is pushed to the repository.

The goal of this project is to ensure early detection of defects and maintain high code quality during the development lifecycle.

Technologies Used

Node.js / Express – Backend application

Jest – Unit testing framework

Supertest – API integration testing

PostgreSQL – Database used for integration tests

Docker & Docker Compose – Containerized test database

ESLint – Static code analysis

GitHub Actions – CI/CD automation

Project Structure

project-root
│
├── src/
│ ├── app.js
│ ├── db.js
│ └── routes/
│
├── tests/
│ ├── unit/
│ │ └── math.test.js
│ └── integration/
│ └── todos.test.js
│
├── docker-compose.test.yml
├── Dockerfile
├── package.json
├── .eslintrc.json
│
└── .github/
└── workflows/
└── ci.yml

Continuous Testing Pipeline

The CI pipeline is implemented using GitHub Actions. Whenever code is pushed to the main branch or a pull request is created, the pipeline automatically performs the following steps:

Checkout repository code

Setup Node.js environment

Install project dependencies

Run static code analysis using ESLint

Execute unit tests using Jest

Start PostgreSQL test database using Docker Compose

Run integration tests using Supertest

Generate test coverage report

Stop the test database container

Running the Project Locally

Install dependencies

npm install

Run static code analysis

npm run lint

Start the test database

docker compose -f docker-compose.test.yml up -d

Run tests

npm test

Stop the test database

docker compose -f docker-compose.test.yml down

Why Continuous Testing?

Continuous Testing ensures:

Early detection of software defects

Improved code quality

Faster feedback for developers

Reduced integration issues

Author

Emad
Project: Continuous Testing in CI/CD using GitHub Actions
