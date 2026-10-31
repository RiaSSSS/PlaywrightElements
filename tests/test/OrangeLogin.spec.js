import { test, expect } from "../../utilities/fixture"

test("login", async ({ loginPage, loginOrangePage, page }) => {

    await page.locator("//span[text()='PIM']").click();
    await expect(page.locator("//h6[text()='PIM']")).toHaveText("PIM");
})
