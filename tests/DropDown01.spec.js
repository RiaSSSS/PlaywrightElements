import { test, expect } from "@playwright/test";

test("RedBus", async ({ page }) => {
  const fromdropdown = page.locator("#srcinput");
  await page.goto("https://www.redbus.in/", {
    waitUntil: "domcontentloaded"
  });
  await fromdropdown.first().click({ force: true });
  await fromdropdown.first().fill("Delhi");
  await page.waitForTimeout(2000);
  const className1 = "." + await page.locator("//div[@id='suggestion-0']/child::div/child::div").nth(0).getAttribute("class");
  const fromlist1 = await page.locator(className1).allTextContents();
  console.log(`first dropdown values: ${fromlist1}`);
  for (let i = 0; i < fromlist1.length; i++) {
    if (fromlist1[i].includes('Delhi')) {
      await page.locator(className1).nth(i).click();
      break;
    }
  }
  await page.waitForTimeout(2000);
  //await page.pause();
  //await page.locator("#suggestion-0").click();
  //await page.pause();
  const className = "." + await page.locator("//div[@id='suggestion-0']/child::div/child::div").nth(0).getAttribute("class");
  console.log("Class Name: " + className);
  const fromlist = await page.locator(className).allTextContents();
  console.log(`second dropdown values: ${fromlist}`);
  for (let i = 0; i < fromlist.length; i++) {
    if (fromlist[i].includes('Lucknow')) {
      await page.locator(className).nth(i).click();
      break;
    }
  }
  await page.waitForTimeout(2000);
});


// const result = className.replace(/\s/g, "");
// console.log("Class Name: " + result);