import { test, expect } from "@playwright/test"

test("alert", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dailog", async (dailog) => {
        await dailog.accept();

    })
    await page.locator('//button[@onclick="jsAlert()"]').click();
    await page.waitForTimeout(5000);

})
test.only("checkbox", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    const checkboxes = await page.getByRole('checkbox');
    await checkboxes.nth(0).check();
    await checkboxes.nth(1).uncheck();
    await expect(checkboxes.nth(0)).toBeChecked();
})