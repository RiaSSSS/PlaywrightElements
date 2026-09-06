import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test.only("Download File Handling", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/download");

    // Wait for download and click Download link
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("//a[contains(text(),'myfile.txt')]").click()
    ]);

    console.log("Download Started");

    // Get downloaded file name
    const fileName = download.suggestedFilename();

    console.log("Downloaded File Name :", fileName);

    // Validate file name
    expect(fileName).toBe("myfile.txt");

    // Create download path
    const downloadPath = path.join("downloads", fileName);

    // Save downloaded file
    await download.saveAs(downloadPath);

    console.log("File Saved At :", downloadPath);

    // Validate file exists
    expect(fs.existsSync(downloadPath)).toBeTruthy();

    console.log("File Download Validation Passed");
});