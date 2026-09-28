const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000
  },

  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'reports/html-report',
      open: 'never'
    }]
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',
    browserName: 'chromium',
    headless: false,

    launchOptions: {
      slowMo: 2000
    },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  retries: 0,
  workers: 1
});