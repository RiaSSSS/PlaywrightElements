import { test, expect } from "@playwright/test";

test("Auto Suggest Dropdown", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dailog", async (dialog) => {
        // Get dialog type
        console.log("Dialog Type :", dialog.type());

        // Get dialog message
        const alertMessage = dialog.message();
        expect(alertMessage).toHaveText("I am a JS Alert");
        await dialog.accept();
    })
    await page.locator('//button[text() ="Click for JS Alert"]').click();
});

test.only("enter in prompt", async ({ page }) => {

    page.on("dialog", async (dialog) => {
        console.log("Dialog Type :", dialog.type());
        const message = dialog.message();
        expect(message).toBe("I am a JS prompt");
        await dialog.accept("ria");
    });
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    //await page.pause();
    await page.locator('//button[text() ="Click for JS Prompt"]').click();
    await page.waitForTimeout(3000);
    await expect(page.locator("#result"))
        .toHaveText("You entered: ria");

});