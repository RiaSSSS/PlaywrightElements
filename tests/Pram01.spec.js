import { test, expect } from "@playwright/test";
import employee from "../TestData/employee.json";
for (const user of employee) {
    test(`OrangeHRM ${user.input}`, async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/");
        await page.getByPlaceholder("username").fill("Admin");
        await page.getByPlaceholder("Password").fill("admin123");
        await page.locator("//button[@type='submit']").click();
        await page.waitForTimeout(3000);
        await expect(page.locator("//h6[text()='Dashboard']")).toHaveText("Dashboard");
        await page.locator("//span[text()='PIM']").click();
        await expect(page.locator("//h6[text()='PIM']")).toHaveText("PIM");
        await page.locator("//a[text()='Add Employee']").click();
        await expect(page.locator("//h6[text()='Add Employee']")).toBeVisible();
        await page.getByPlaceholder("First Name").fill(user.firstName);
        await page.getByPlaceholder("Middle Name").fill(user.MiddleName);
        await page.getByPlaceholder("Last Name").fill(user.LastName);
        await page.locator('//button[@type="submit"]').click();
        await page.waitForLoadState("domcontentloaded");
        if (user.input) {
            await expect(page.locator('//input[@name="firstName"]')).toHaveValue(user.firstName);
        }
        else {
            await expect(page.locator("//span[text()='Required']")).toBeVisible();
        }
    });
}