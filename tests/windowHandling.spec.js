import { test, expect } from "@playwright/test";

test("Window Handling - Single Child Window", async ({ page }) => {
    console.log("Test Started");

    // ======================================================
    // STEP 1 - OPEN PARENT WINDOW
    // ======================================================
    // page represents the Parent Window / Browser Tab.
    // goto() opens the application in the Parent Window.
    await page.goto("https://demo.automationtesting.in/Windows.html");

    // ======================================================
    // STEP 2 - VALIDATE PARENT WINDOW
    // ======================================================
    // toHaveTitle() validates the title of the Parent Window.
    // Playwright automatically waits until the expected title is found.
    await expect(page).toHaveTitle(/Frames & windows/);

    // title() returns the current page title.
    console.log("Parent Title :", await page.title());

    // url() returns the current page URL.
    console.log("Parent URL :", page.url());

    // page.context() returns the current BrowserContext.
    // context.pages() returns all Page objects currently open.
    // Initially only the Parent Window should be available.
    console.log("Parent Window Count :", page.context().pages().length);

    // ======================================================
    // STEP 3 - HANDLE CHILD WINDOW
    // ======================================================
    /*
    Promise.all() is used because two operations need to
    happen together:
    
    1. page.waitForEvent("popup")
       -> Wait for the Child Window / Popup.
    
    2. click()
       -> Click the button which opens the Child Window.
    
    If we click first and start waiting for the popup later,
    the popup event may already have happened.
    This is called a Race Condition.
    
    Syntax:
    const [popup] = await Promise.all([page.waitForEvent("popup"), page.locator("selector").click()]);
    
    Promise.all() returns an Array.
    
    Example:
    [Page Object]
    
    Therefore we use:
    [popup]
    
    to directly get the Page Object from the returned array.
    */

    const [popup] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("//button[contains(text(),'click')]").first().click()
    ]);

    console.log("Popup Captured Successfully");

    // context.pages() returns all currently open windows.
    // Parent + Child = 2 windows.
    console.log("Total Windows :", page.context().pages().length);

    // ======================================================
    // STEP 4 - WAIT FOR CHILD WINDOW
    // ======================================================
    // popup is a Page Object representing the Child Window.
    // We should wait for the Child Window, not the Parent Window.
    await popup.waitForLoadState("domcontentloaded");

    // ======================================================
    // STEP 5 - CHILD WINDOW DETAILS
    // ======================================================
    // popup.title() returns the title of the Child Window.
    console.log("Child Title :", await popup.title());

    // popup.url() returns the URL of the Child Window.
    console.log("Child URL :", popup.url());

    // ======================================================
    // STEP 6 - VALIDATE CHILD WINDOW
    // ======================================================
    // Validate Child Window title.
    await expect(popup).toHaveTitle(/Selenium/);

    // Validate Child Window URL.
    await expect(popup).toHaveURL(/selenium/);

    // ======================================================
    // STEP 7 - LOCATE ELEMENT INSIDE CHILD WINDOW
    // ======================================================
    /*
    Important:
    
    In Selenium we generally use:
    
    driver.switchTo().window(windowHandle);
    
    In Playwright we don't need switchTo().window().
    
    popup itself represents the Child Window.
    
    Therefore we can directly use:
    
    popup.locator()
    popup.title()
    popup.url()
    popup.close()
    */

    const documentation = popup.locator('//a[@href="/documentation"]');

    // Validate Documentation link inside Child Window.
    await expect(documentation).toBeVisible();

    console.log("Documentation :", await documentation.textContent());

    console.log("Child Window Validation Passed");

    // ======================================================
    // STEP 8 - CLOSE CHILD WINDOW
    // ======================================================
    // popup.close() closes only the Child Window.
    // Parent Window remains open.
    await popup.close();

    console.log("Child Window Closed");

    // After closing Child Window, only Parent Window remains.
    console.log("Remaining Windows :", page.context().pages().length);

    // ======================================================
    // STEP 9 - CONTINUE USING PARENT WINDOW
    // ======================================================
    /*
    No switchTo().window() is required.
    
    The original 'page' variable still represents
    the Parent Window.
    */

    await expect(page).toHaveURL("https://demo.automationtesting.in/Windows.html");

    console.log("Parent Window Validation Passed");
});


test.only("Window Handling - Separate Window", async ({ page }) => {
    console.log("Test Started");

    // ======================================================
    // STEP 1 - OPEN PARENT WINDOW
    // ======================================================
    // page represents the Parent Window.
    await page.goto("https://demo.automationtesting.in/Windows.html");

    // ======================================================
    // STEP 2 - VALIDATE PARENT WINDOW
    // ======================================================
    await expect(page).toHaveTitle(/Frames & windows/);

    console.log("Parent Title :", await page.title());
    console.log("Parent URL :", page.url());

    // Initially only Parent Window is available.
    console.log("Parent Window Count :", page.context().pages().length);

    // ======================================================
    // STEP 3 - SELECT SEPARATE WINDOW TAB
    // ======================================================
    // Click the Separate Window tab before clicking
    // the button that opens the Child Window.
    await page.locator('a[href="#Seperate"]').click();

    console.log("Separate Window Tab Selected");

    // ======================================================
    // STEP 4 - HANDLE SEPARATE WINDOW
    // ======================================================
    /*
    Promise.all() is used here as well.
    
    First operation:
    page.waitForEvent("popup")
    -> waits for the new Child Window.
    
    Second operation:
    page.locator("#Seperate button").click()
    -> clicks the button which opens the Child Window.
    
    The new Page Object is stored in page1.
    
    Syntax:
    const [page1] = await Promise.all([page.waitForEvent("popup"), page.locator("selector").click()]);
    */

    const [page1] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("#Seperate button").click()
    ]);

    console.log("Popup Captured Successfully");

    // Parent + Child Window.
    console.log("Total Windows :", page.context().pages().length);

    // ======================================================
    // STEP 5 - WAIT FOR CHILD WINDOW
    // ======================================================
    // page1 represents the Child Window.
    await page1.waitForLoadState("domcontentloaded");

    // ======================================================
    // STEP 6 - CHILD WINDOW DETAILS
    // ======================================================
    console.log("----------------------");

    console.log("Child Title :", await page1.title());
    console.log("Child URL :", page1.url());

    // ======================================================
    // STEP 7 - VALIDATE CHILD WINDOW
    // ======================================================
    await expect(page1).toHaveTitle(/Selenium/);
    await expect(page1).toHaveURL(/selenium/);

    // ======================================================
    // STEP 8 - LOCATE ELEMENT INSIDE CHILD WINDOW
    // ======================================================
    /*
    page1 is already the Child Window Page Object.
    No window switching is required.
    */

    const documentation = page1.locator('//a[@href="/documentation"]');

    await expect(documentation).toBeVisible();

    console.log("Documentation :", await documentation.textContent());

    console.log("Child Window Validation Passed");

    // ======================================================
    // STEP 9 - CLOSE CHILD WINDOW                                  
    // ======================================================
    await page1.close();

    console.log("Child Window Closed");

    // Verify that only Parent Window remains.
    console.log("Remaining Windows :", page.context().pages().length);

    // ======================================================
    // STEP 10 - VALIDATE PARENT WINDOW
    // ======================================================
    // Original 'page' object still represents Parent Window.
    // No switchTo().window() is required.
    await expect(page).toHaveURL("https://demo.automationtesting.in/Windows.html");

    console.log("Parent Window Validation Passed");
});