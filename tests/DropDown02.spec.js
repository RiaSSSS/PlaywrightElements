import { test, expect } from '@playwright/test'

test("Amazon dropdown", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    //await page.pause();
    const text = await page.locator("h4").textContent();
    console.log(text);
    if (text.includes("continue shopping")) {
        await page.locator("//button[text()='Continue shopping']").click();
    }
    const dropdownlocator = page.locator("//button[@aria-label ='Expand Account and Lists']");
    await dropdownlocator.click();
    const dropdownlocatorList = await page.locator(".nav-text").allTextContents();
    console.log(dropdownlocatorList);

    for (let i = 0; i < dropdownlocatorList.length; i++) {
        if (dropdownlocatorList[i] === "Your Orders") {
            await page.locator(".nav-text").nth(i).click();
            break;
        }
    }
    await expect(page).toHaveTitle("Amazon Sign-In");
});