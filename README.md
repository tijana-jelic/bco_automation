# WebdriverIO Boilerplate project

## Documentation

- [QA WIKI - WebdriverIO](https://sites.google.com/a/work.co/qa-wiki/05-automation/webdriverio-guide/install-and-configure?authuser=0)
- [WebdriverIO docs](https://webdriver.io/docs/gettingstarted)

## Commands

Install dependencies:

```bash
yarn
```

Run all tests:

```bash
yarn wdio
```

Run a specific spec (for example /specs/homepageBasic.js"):

```bash
yarn wdio --spec=/specs/homepageBasic.js
```

Run a specific suite of test (previously defined in wdio.conf.js)):

```bash
yarn wdio --suite=homepage
```

Run a accessibility suite and generate a json file report in a11y folder:

```bash
yarn wdio --suite=a11y
```

Run all tests in headless mode:

```bash
headless=yes yarn wdio
```

Run all tests in Firefox:

```bash
browser=firefox yarn wdio
```

## Description

- homepageBasic.js is spec for testing the homepage title and logo, but without any page-object files used.
- homepage.js does the same as homepageBasic.js, but it uses the page-object modal, in this case it has a homepage.page.js file where all selectors and methods are defined (and homepage.page.js extends page.js so it can use all selectors/methods from page.js).
- a11y is folder containing accesibiliity testing specs, using axe-core. When we run that spec, it generates a JSON file report with violations reported by axe
