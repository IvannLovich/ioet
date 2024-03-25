# IOET Automations Cypress Project

## Introduction

This repository contains automated tests for the IOET application using Cypress, a modern end-to-end testing framework.

## Prerequisites

- Node.js version 18.17.1 must be installed. You can download it from [here](https://nodejs.org/).

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:

   ```bash
   npm install --legacy-peer-deps
   ```

## Usage

- To open Cypress Test Runner, use the following command:

  ```bash
  npm run cy:open
  ```

- To run tests in headless mode and generate HTML reports, execute:

  ```bash
  npm run cy:open:headless
  ```

- To run tests in Chrome, use:

  ```bash
   npm run cy:run:chrome
  ```

- To run tests in Firefox, use:

  ```bash
   npm run cy:run:firefox
  ```

## Project Structure

```bash
ioet_automations/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   ├── fixtures/
│   ├── reports/
│   │   ├── cucumber-html/
│   │   └── html-multi-report/
│   │       ├── assets/
│   │       │   ├── css/
│   │       │   ├── fonts/
│   │       │   ├── img/
│   │       │   └── js/
│   │       └── features/
│   ├── support/
│   │   ├── page_objects/
│   │   │   └── pages/
│   │   └── step_definitions/
│   └── videos/
├── package.json
├── cypress.config.ts
├── login.feature
├── LoginPage.js
└── test.cy.js

```
