import { test, expect } from "@playwright/test"

test("shadow DOM", async ({ page }) => {

    await page.goto("https://selectorshub.com/xpath-practice-page/");
    await page.locator(".jackPart").locator("#kils").fill("ria");
    //await page.waitForTimeout(3000);
    await expect(page.locator(".jackPart").locator("#kils")).toHaveValue("ria");
})