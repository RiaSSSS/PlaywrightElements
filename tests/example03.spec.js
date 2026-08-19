import { test, expect } from "@playwright/test";

test("Auto Suggest Dropdown", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in").click();
});