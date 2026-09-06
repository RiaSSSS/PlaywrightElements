import { test, expect } from "@playwright/test";
import path from "path";

test("Upload File Handling", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    // Absolute path of the file to upload
    // __dirname = Current directory
    // ../ = Go one folder back
    const filePath = path.join(__dirname, "../TestData/QA behavioural questions.pdf");

    // Upload file
    await page.locator("#file-upload").setInputFiles(filePath);

    // Click Upload button
    await page.locator("#file-submit").click();
    await page.waitForTimeout(3000);

    // Validate upload
    await expect(page.locator("h3")).toHaveText("File Uploaded!");

});

test.only("upload", async ({ page }) => {
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    const filePath = path.join(__dirname, "../TestData/QA behavioural questions.pdf");
    await page.locator('//input[@id="myFile"]').setInputFiles(filePath);
    await page.locator("//button[text()='Click To Open Window Prompt Alert']").click();
    await page.waitForTimeout(3000);

})