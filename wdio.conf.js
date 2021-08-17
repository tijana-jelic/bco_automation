const { findChromeDriverVersionSync } = require('find-chrome-driver-version');
const seleniumOptions = {
  drivers: {
    chrome: {
      version: findChromeDriverVersionSync(),
      baseURL: 'https://chromedriver.storage.googleapis.com',
    },
    firefox: {
      version: '0.24.0',
    },
  },
};
let capabilities;
let headless;
// headless or headded mode depending on arg 
switch (process.env.headless) {
  case 'yes':
    headless = ['--headless'];
    break;
  default:
    headless = [];
}
// browser depending on args - default=chrome
switch (process.env.browser) {
  case 'firefox':
    capabilities = [
      {
        maxInstances: 1,
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: headless,
        },
      },
    ];
    break;
  default:
    capabilities = [
      {
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: headless,
        },
      },
    ];
}

exports.config = {
  breakpoint: process.env.breakpoint,
  runner: 'local',
  specs: ['./webdriverio/specs/**/*.js'],
  suites: {
    homepage: ['./webdriverio/specs/homepageBasic.js', './webdriverio/specs/homepage.js'],
    a11y: ['./webdriverio/specs/a11y/*.js'],
  },
  exclude: ['./webdriverio/page-objects/*.js'],
  capabilities,
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'https://work.co',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: ['js:babel-register'],
  },

  before(capabilities, specs) {
    const chai = require('chai');
    chai.config.includeStack = true;
    global.expect = chai.expect;
    global.AssertionError = chai.AssertionError;
    global.Assertion = chai.Assertion;
    global.assert = chai.assert;
    switch (browser.config.breakpoint) {
      case 'mobile':
        browser.setWindowSize(375, 667);
        break;
      case 'tablet':
        browser.setWindowSize(768, 1024);
        break;
      case 'ipadPro':
        browser.setWindowSize(1024, 768);
        break;
      default:
        browser.setWindowSize(1440, 900);
    }
  },
  seleniumArgs: seleniumOptions,
  seleniumInstallArgs: seleniumOptions,
};
