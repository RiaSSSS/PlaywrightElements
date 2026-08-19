import { test, expect } from '@playwright/test';

// test   -> Used to define a test case.
// expect -> Used to perform assertions (verification/validation).

test("TC001", async ({ page }) => {

    // Wait for 5 seconds (Not recommended in real projects)
    await page.waitForTimeout(5000);

    // Navigate to the Registration page
    await page.goto("https://demo.automationtesting.in/Register.html");

    // Wait for 5 seconds to observe the page
    await page.waitForTimeout(5000);

});

test.only("Complete navigation flow on Facebook", async ({ page }) => {

    // ==========================
    // Step 1: Navigate to Facebook
    // ==========================
    await page.goto("https://www.facebook.com/");

    console.log("Step 1 - Open Facebook page: " + page.url());

    // Capture the page title for later verification
    const facebookTitle1 = await page.title();

    console.log("Facebook Page Title: " + facebookTitle1);

    // Verify page title and URL
    // (Replace "Test" with the actual Facebook title)
    await expect(page).toHaveTitle("Facebook");
    await expect(page).toHaveURL("https://www.facebook.com/");

    console.log("Facebook page opened successfully. Title and URL verified.");

    await page.waitForTimeout(3000);

    // ==========================
    // Step 2: Navigate to SauceDemo
    // ==========================
    await page.goto("https://www.saucedemo.com/");

    console.log("Step 2 - Open SauceDemo page: " + page.url());

    await page.waitForTimeout(3000);

    // Capture the SauceDemo page title
    const sauceDemoTitle1 = await page.title();

    console.log("SauceDemo Page Title: " + sauceDemoTitle1);

    // Verify title and URL
    await expect(page).toHaveTitle(sauceDemoTitle1);
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    console.log("SauceDemo page opened successfully. Title and URL verified.");

    await page.waitForTimeout(3000);

    // ==========================
    // Step 3: Navigate Back
    // ==========================
    await page.goBack();

    console.log("Navigated back to Facebook page.");

    await page.waitForTimeout(3000);

    // Verify Facebook page after navigating back
    await expect(page).toHaveTitle(facebookTitle1);

    await page.waitForTimeout(3000);

    // ==========================
    // Step 4: Navigate Forward
    // ==========================
    await page.goForward();

    console.log("Navigated forward to SauceDemo page.");

    await page.waitForTimeout(3000);

    // Verify SauceDemo page after navigating forward
    await expect(page).toHaveTitle(sauceDemoTitle1);

    // ==========================
    // Step 5: Reload the Current Page
    // ==========================
    await page.reload();

    console.log("Reloaded the current page.");

    await page.waitForTimeout(3000);

    console.log("Navigation flow completed successfully.");

});