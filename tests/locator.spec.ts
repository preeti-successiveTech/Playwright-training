import {test,expect} from "@playwright/test";
const username = "user_" + Date.now();
const password = "Pass_" + Date.now();
test("testing all the locators",async({page})=>{
    await page.goto("https://demoblaze.com/");
    await page.getByRole("link", {name: "Sign up"}).click();
    const model = page.getByRole("dialog");
    await expect(model).toBeVisible();
    await expect(page.getByRole("heading", {name: "Sign up"})).toBeVisible();
    await model.getByLabel('Close').click();
     await page.getByRole("link", {name: "Sign up"}).click();
     await expect(page.getByLabel("Username:")).toBeVisible();
     await page.getByRole("textbox",{name:"Username:"}).fill(username);
     await expect(page.getByLabel("Password:")).toBeVisible();
     await page.getByRole("textbox",{name:"Password:"}).fill(password);
     await expect(page.getByRole("button",{name:"Sign up"})).toBeVisible();
     await page.getByRole("button",{name:"Sign up"}).click();
     page.on('dialog', async (dialog) => {
  console.log(dialog.message());
  await dialog.accept(); // click OK
});
     await expect(page).toHaveURL("https://demoblaze.com/");
     await page.getByRole("link",{name:"Log in"}).click();
     await expect(page.getByRole("heading",{name:"Log in"})).toBeVisible();  
        await page.locator('#loginusername').fill("testuser");
  await page.locator('#loginpassword').fill("123456"); 
       await page.getByRole("button",{name:"Log in"}).click();
       await expect(page).toHaveURL("https://demoblaze.com/");
       
});