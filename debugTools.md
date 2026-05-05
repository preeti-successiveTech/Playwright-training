### Headless Mode
```
use: {
  headless: true
}
```
- Runs without UI (no browser visible)
- Faster
- Hard to debug

### Headed Mode
```
use: {
  headless: false
}
```
- Runs with visible browser
- You can SEE:- 
- clicks
- typing
- navigation

- Best for debugging 

### Debugging methods
**Method 1:Debug Mode (MOST IMPORTANT)**
```
npx playwright test --debug
```

Opens Playwright Inspector

- Step-by-step execution
- Pause/resume
- Inspect locators

**Method 2: page.pause()**
```
await page.pause();
```

Execution stops at this line

- Inspect elements
- Try locators live

**Method 3: Slow Motion**
```
use: {
  headless: false,
  launchOptions: {
    slowMo: 1000
  }
}
```
Adds delay (1 sec) between actions

- Helps visualize steps

**Method 4: Screenshots**
```
await page.screenshot({ path: 'debug.png' });
```
- Capture UI state

**Method 5: Trace Viewer (VERY POWERFUL)**
```
Run test with trace:

npx playwright test --trace on

Then open:

npx playwright show-trace trace.zip

```
- Shows:

steps, 
network ,
DOM ,
screenshots 

### Best debugging tool

**Method 6: Video Recording**
```
use: {
  video: 'on'
}
```
Records test execution

**Method 7: Console Logs**
```
console.log("Step reached");
```
Simple but useful

**Method 8: Error Logs**
```
page.on('console', msg => console.log(msg.text()));
```
Capture browser console errors