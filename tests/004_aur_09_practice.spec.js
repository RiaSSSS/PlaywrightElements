import { test, expect } from "@playwright/test";

test.only("Change tab", async ({ page, context }) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('//input[contains(@placeholder,"Search Amazon.in")]').fill("pen");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    //newtab
    const [newTab] = await Promise.all([
        //wait for new tab
        context.waitForEvent('page'),
        page.locator("(//div[@class='a-section aok-relative s-image-square-aspect']//img)[1]").click()]);
    //await page.locator("//input[@value='Add to cart']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);
    //now newtab is represented by newTab
    await newTab.locator('//input[@id="add-to-cart-button"]').click();
});

test("dropdown", async ({ page }) => {
    await page.goto("https://www.makemytrip.com/flights/");
    await page.locator("[class='commonModal__close']").click();
    await page.locator('//span[contains(@class,"headerstyle__Arrow")]').click();
    await page.waitForTimeout(5000);
    await page.locator("[data-testid='country-dropdown']").click();
    await page.locator('//span[text()="United Arab Emirates"]').click();
    await page.waitForTimeout(5000);
});

test("checkbox", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
    await page.getByRole("checkbox", { type: "checkbox" }).first().check();
    await page.waitForTimeout(5000);
});

test("Select Dropdown", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    await page.getByRole('combobox', { id: 'dropdown' })
        .selectOption({ label: 'Option 1' });
    await page.waitForTimeout(5000);
});