import {test,expect} from "@playwright/test";
import { chromium } from "@playwright/test";
test("successfull login",async({page})=>{
  const browser = await chromium.launch();

  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  await page1.goto('https://example.com');
  await page2.goto('https://google.com');

  await browser.close();
});


// npx playwright test tests/browserANDcontext.spec.ts --headed