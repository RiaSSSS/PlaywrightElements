import { test, expect } from '@playwright/test';

test("iFrame", async ({ page }) => {

    page.goto("https://demo.automationtesting.in/Frames.html#google_vignette",
        { waitUntil: "domcontentloaded" });
    const iframeLocator = page.frameLocator('#singleframe');

    await expect(iframeLocator.locator("h5")).toHaveText("iFrame Demo");
    await iframeLocator.locator("//input[@type='text']").fill("Ria");
    await page.waitForTimeout(3000);
})

test.only("iFrame nested", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette");
    await page.locator(".analystic").nth(1).click();
    const iframe1 = page.frameLocator("//div[@id='Multiple']/child::iframe");
    const iframe2 = iframe1.frameLocator('//div[@class="iframe-container"]/child::iframe');
    await expect(iframe1.locator("h5")).toHaveText("Nested iFrames");
    await expect(iframe2.locator("h5")).toHaveText("iFrame Demo");
    await iframe2.locator('//input[@type="text"]').nth(0).fill("Ria");
    await page.waitForTimeout(3000);
});