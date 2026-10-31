import { test, expect } from "@playwright/test";
//import - A keyword used to bring IN (load) code from anotehr pack/module

// ================= BASIC UNDERSTANDING =================

// test --> Used to define a single test case
// expect --> Assertion library used to validate results

// page --> Represents a browser tab (like WebDriver in Selenium)
// Playwright automatically provides "page" using fixtures

// async --> Marks function as asynchronous (returns a Promise)
// Promise --> Represents future result (Pending / Fulfilled / Rejected)

// await --> Waits for async operation to complete before moving ahead

//My first test - Test Name

test("TC001", async ({ page }) => {

   await page.goto("https://www.facebook.com/");

   await expect(page).toHaveTitle("Facebook");

});

/*

/*
───────────────────────────────────────────────
JavaScript Async Concepts (Important Notes)
───────────────────────────────────────────────

1️⃣ async
   - The 'async' keyword is used before a function to make it asynchronous.
   - An async function always returns a Promise.
   - It allows asynchronous operations like network calls or page loads
     without blocking the rest of the code.

2️⃣ Promise
   - A Promise is a built-in JavaScript object representing a future value.
   - It can be in one of three states:
        Fulfilled  → Operation completed successfully
        Rejected   → Operation failed
        Pending    → Operation still in progress

3️⃣ await
   - The 'await' keyword is used only inside async functions.
   - It pauses the function execution until the Promise is resolved or rejected.
   - Example:
        await page.goto("https://www.facebook.com/");
     This line waits until the page has fully loaded before continuing.
───────────────────────────────────────────────
4. In Playwright, page represents a single browser tab or window and is used to 
   perform all user interactions on a web application.
*/



