import {test,expect} from "@playwright/test";
test("successfull login",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login");
    await expect(page).toHaveTitle("The Internet");
    await page.locator("#username").fill("tomsmith");
    await page.locator("#password").fill("SuperSecretPassword!");
   await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
    await page.getByRole("link", { name: "Logout" }).click();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/login");

});