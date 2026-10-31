import { test, expect } from "@playwright/test"

test("wikipedia", async ({ page }) => {
    await page.goto("https://en.wikipedia.org/wiki/Sachin_Tendulkar");
    let dob = await page.locator("//table[@class='infobox vcard']/tbody/tr[4]/td[contains(text(),'24 April 1973')]").textContent();
    console.log(dob);
})
////a[contains(text(),'A Light in the ...')]//..//following-sibling::div//child::p[@class="price_color"]
////div[@class="a-row a-carousel-header-row a-size-large"]//h2[contains(.,'Bestsellers in Watches')]//..//..//following-sibling::div[@class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons"]//div[@class="p13n-sc-truncate-desktop-type2  p13n-sc-truncated"]

test.only("amazon", async ({ page }) => {
    let products = [];
    await page.goto("https://www.amazon.in/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2");
    await page.waitForLoadState('domcontentloaded');
    products = await page.locator('//div[@class="a-row a-carousel-header-row a-size-large"]//h2[contains(.,"Bestsellers in Beauty")]//..//..//following-sibling::div[@class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons"]//div[@class="p13n-sc-truncate-desktop-type2  p13n-sc-truncated"]').allInnerTexts();
    let productsCount = await page.locator('//div[@class="a-row a-carousel-header-row a-size-large"]//h2[contains(.,"Bestsellers in Beauty")]//..//..//following-sibling::div[@class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons"]//div[@class="p13n-sc-truncate-desktop-type2  p13n-sc-truncated"]').count();
    console.log(products);
    console.log(productsCount);
    for (let i = 1; i <= productsCount; i++)
        if (products[i]?.includes("Cetaphil Gentle Skin Hydrating")) {
            await page.locator('//div[@class="a-row a-carousel-header-row a-size-large"]//h2[contains(.,"Bestsellers in Beauty")]//..//..//following-sibling::div[@class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons"]//div[@class="p13n-sc-truncate-desktop-type2  p13n-sc-truncated"]').nth(i).click();
            break;
        }

    await page.pause();
})

test("calendar", async ({ page }) => {
    await page.goto("https://www.makemytrip.com/");
    await page.locator('//label[@for="departure"]').click();
    ////div[@class="DayPicker-Week"]//div[@class="dateInnerCell"]//child::p[contains(.,'10')]
    await page.locator("//div[@class='DayPicker-Week']//div[@class='dateInnerCell']//child::p[contains(.,'10')]").nth(0).click();
    await page.locator('//label[@for="return"]').click();
    await page.waitForTimeout(5000);
})