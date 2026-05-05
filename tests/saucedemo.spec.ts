import {test,expect} from "@playwright/test";
test("successfull login",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.getByRole("button",{name:"Add to cart"}).nth(0).click();
    await page.getByRole("button",{name:"Add to cart"}).nth(1).click();
   await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    await page.getByRole("button",{name:"checkout"}).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
    await page.getByRole("textbox", { name: "First Name" }).fill("Preeti");
    await page.getByRole("textbox", { name: "Last Name" }).fill("Singh");
    await page.getByRole("textbox",{name:"Zip/Postal Code"}).fill("123445");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
    // await page.screenshot({ path: 'debug.png' });
    await page.getByRole("button", { name: "Finish" }).click();
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.getByRole("link", { name: "Logout" }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
})

// npx playwright test --debug