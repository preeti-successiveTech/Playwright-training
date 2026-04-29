# Playwright Setup & Installation Guide (27-Apr Assignment)

# Objective

This document covers:

*  Installing Node.js
* Setting up Playwright
* Running the first test
* Running tests in multiple browsers

---

## 1. Install Node.js

Download and install Node.js (LTS version).

### Verify Installation

```bash
node -v
npm -v
```

---

## 2. Initialize Project

```bash
npm init -y
```

---

## 3. Install Playwright

```bash
npm init playwright@latest
```

---

## 4. Project Structure

```
project/
 ├── node_modules/
 ├── tests/
 ├── package.json
 └── playwright.config.ts
```

---

## 5. Create First Test

Create file:

```
tests/google.spec.ts
```

Add code:

```ts
import { test, expect } from '@playwright/test';

test('Open Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
```

---

## 6. Run Test

```bash
npx playwright test    

npx playwright test tests/google.spec.ts
```

## 7. What is Playwright 
Playwright Test is an end-to-end test framework for modern web apps. It bundles test runner, assertions, isolation, parallelization and rich tooling. Playwright supports Chromium, WebKit and Firefox on Windows, Linux and macOS, locally or in CI, headless or headed, with native mobile emulation for Chrome (Android) and Mobile Safari.

---

## 8. Playwright architecture
Playwright follows a layered architecture that allows interaction with browsers in a fast and reliable way.

### Flow of Execution
Test Script → Playwright API → Browser Engine → Web Application
### Components
1. Test Script - 
Written using Playwright test framework
Contains test cases and assertions
2. Playwright API - 
Provides functions like goto(), click(), fill()
Acts as a bridge between test and browser
3. Browser Supports - 
Chromium
Firefox
WebKit
Runs tests in real browsers
4. Browser Context - 
Acts like an incognito window
Isolated environment (no shared cookies/storage)
5. Page - 
Represents a single tab
All actions (click, type, validate) happen here
### Key Features of Playwright Architecture
- Auto-waiting (no need for explicit waits)
- Parallel execution
- Multiple browser support
- Network interception
- Headless & headed execution


## Selenium vs Playwright 
### Selenium
- Uses WebDriver architecture
- Requires separate browser drivers (ChromeDriver, GeckoDriver)
- Slower execution due to indirect communication
- Needs explicit waits (WebDriverWait)
- Setup is complex
- Parallel execution needs Selenium Grid
- Limited support for network interception
- Less efficient for modern dynamic apps
- Supports many languages (Java, Python, C#, etc.)
- Older and widely used in industry
### Playwright
- Uses direct browser communication
- No external drivers required
- Faster execution
- Built-in auto-waiting
- Easy setup
- Built-in parallel execution
- Supports network interception & API mocking
- Better for modern apps (React, Angular, SPA)
- Supports JavaScript, TypeScript, Python, Java
- Modern and rapidly growing tool