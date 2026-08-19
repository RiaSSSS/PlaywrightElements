import { test, expect } from "@playwright/test";

test("RedBus", async ({ page }) => {
  const fromdropdown = page.locator("#srcinput");
  await page.goto("https://www.redbus.in/", {
    waitUntil: "domcontentloaded"
  });
  await fromdropdown.first().click({ force: true });
  await fromdropdown.first().fill("Delhi");
  await page.locator("#suggestion-1").click();

  const fromlist = await page.locator(".leftListCont___31577a").allTextContents();
  console.log(fromlist);
  for (let i = 0; i < fromlist.length; i++) {
    if (fromlist[i].includes('Kashmiri Gate')) {
      await page.locator(".leftListCont___31577a").nth(i).click();
      break;
    }
  }
  //await page.pause();
});