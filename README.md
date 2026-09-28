# SauceDemo Playwright Automation Project

## Project Overview

This project automates the SauceDemo web application using **Playwright with JavaScript**.

The project follows automation best practices such as:

* Page Object Model (POM)
* Reusable methods
* Reusable locators
* Meaningful naming conventions
* Assertions
* Explicit waits where required
* Test data separation
* Clean and maintainable project structure

## Technologies Used

* Playwright
* JavaScript
* Node.js
* npm
* Git
* Chromium

## Application Under Test

**Application:** SauceDemo

**URL:** https://www.saucedemo.com/

## Project Structure

```text
SauceDemo-Playwright/
│
├── tests/
│   ├── login.spec.js
│   ├── products.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   └── logout.spec.js
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── MenuPage.js
│
├── locators/
│   ├── login.locators.js
│   ├── products.locators.js
│   ├── cart.locators.js
│   └── checkout.locators.js
│
├── fixtures/
├── utils/
├── test-data/
│   └── testData.js
│
├── screenshots/
├── reports/
├── playwright.config.js
├── package.json
└── README.md
```

## Test Scenarios Covered

The automation project covers the following scenarios:

1. Valid Login
2. Invalid Login
3. Verify Products Page
4. Add Two Products to Cart
5. Remove One Product from Cart
6. Complete Checkout
7. Verify Order Confirmation
8. Logout

## Installation

### 1. Clone the Project

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the Project

```bash
cd SauceDemo-Playwright
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Playwright Browsers

```bash
npx playwright install
```

## Test Data

Test data is maintained separately in:

```text
test-data/testData.js
```

Example test data includes:

* Valid username
* Valid password
* Invalid username
* Invalid password
* First name
* Last name
* Postal code

This keeps test data separate from test scripts and makes the tests easier to maintain.

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### Run a Specific Test File

```bash
npx playwright test tests/login.spec.js
```

### Run Tests with a Single Worker

```bash
npx playwright test --workers=1
```

## HTML Report

After test execution, generate/open the Playwright HTML report using:

```bash
npx playwright show-report reports/html-report
```

The HTML report provides information about:

* Passed tests
* Failed tests
* Test execution time
* Test steps
* Screenshots
* Videos
* Traces when available

## Screenshots

The project is configured to capture screenshots when a test fails.

Configuration:

```javascript
screenshot: 'only-on-failure'
```

Failure screenshots are available in the Playwright test results when failures occur.

## Video Recordings

The project is configured to retain video recordings when tests fail.

Configuration:

```javascript
video: 'retain-on-failure'
```

Videos are available in the Playwright test results when failures occur.

## Playwright Configuration

The main Playwright configuration is maintained in:

```text
playwright.config.js
```

The configuration includes:

* Test directory
* Base URL
* Browser configuration
* Timeout
* Assertions timeout
* HTML reporting
* Screenshots
* Video recording
* Trace collection
* Worker configuration

## Page Object Model

The project uses Page Object Model to separate page-related actions from test cases.

For example:

```text
LoginPage.js
    ↓
Login actions and locators

ProductsPage.js
    ↓
Product-related actions

CartPage.js
    ↓
Cart-related actions

CheckoutPage.js
    ↓
Checkout-related actions

MenuPage.js
    ↓
Menu and logout actions
```

This improves code reusability and maintainability.

## Test Execution Result

Current automation execution:

```text
8 tests passed
```

All eight assessment scenarios are automated and passing successfully.

## Author

**Venkat K**

QA / Software Testing Fresher
