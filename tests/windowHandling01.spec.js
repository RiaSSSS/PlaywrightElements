import { test, expect } from "@playwright/test";

test("window handling", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html#google_vignette");
    const parentframe = page;
    await parentframe.locator("//a[text()='Open New Seperate Windows']").click();
    const [childPage] = await Promise.all([page.waitForEvent("popup"),
    page.locator('//button[text()="click"]').click()]);
    await expect(childPage).toHaveTitle("Selenium");
    await childPage.locator('//a[@href="/documentation"]').click();
    await expect(childPage.locator("h1")).toHaveText("The Selenium Browser Automation Project");
});

test.only("window_handling_newpage", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const [linkedin] = await Promise.all([page.waitForEvent("popup"), page.locator("//a[contains(@href,'linkedin')]").click()]);
    const [facebook] = await Promise.all([page.waitForEvent("popup"), page.locator("//a[contains(@href,'facebook')]").click()]);
    await linkedin.bringToFront();
    //await linkedin.locator('//button[@aria-label="Dismiss"]').click();
    await expect(linkedin).toHaveURL("https://www.linkedin.com/company/orangehrm");
});