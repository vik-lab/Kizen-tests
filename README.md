# Project Name

Kizen-test: Playwright + TypeScript UI test suite (page objects: HomePage, Header, Footer).

## Setup
1. npm install
2. npx playwright install

## Run tests
npx playwright test
npx playwright show-report

## Project structure
- pages/
  - homepage.ts        — HomePage page object
  - components/
    - header.ts        — Header component page object
    - footer.ts        — Footer component page object
- fixtures/
  - page-objects.ts    — Playwright fixtures (home, header, footer)
- tests/               
  - kizen-test.spec.ts - Tests using POM 
  - test-1.spec.ts     - E2E Journey verify navigation using direct page interactions
- playwright.config.ts
- package.json
- .gitignore
- README.md
