import { test, expect } from "@playwright/test";

test("Home Page Test", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let pageTitle = await page.title();

    console.log(pageTitle);

    await expect(page).toHaveTitle(pageTitle);

    await page.waitForTimeout(5000);

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})

test.only("Dashbaord Page Test", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let pageTitle = await page.title();

    console.log(pageTitle);

    await expect(page).toHaveTitle(pageTitle);

    await page.waitForTimeout(5000);

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})