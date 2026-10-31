import { test } from "@playwright/test";

test("Web Table Handling", async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // How many rows are present in table
    const rowList = page.locator('//table[@id="customers"]/tbody/tr');
    const rowCount = await rowList.count();

    console.log("Total Rows :", rowCount);

    // How many columns are present in table
    const colList = page.locator('//table[@id="customers"]/tbody/tr[1]/th');
    const colCount = await colList.count();

    console.log("Total Columns :", colCount);

    // Retrieve specific row and column data
    const specificText = await page
        .locator('//table[@id="customers"]/tbody/tr[3]/td[3]')
        .innerText();

    console.log("Specific Cell Data :", specificText);

    // Retrieve all row and column data
    for (let i = 2; i <= rowCount; i++) {

        let rowData = [];

        for (let j = 1; j <= colCount; j++) {

            const data = await page
                .locator(`//table[@id="customers"]/tbody/tr[${i}]/td[${j}]`)
                .innerText();

            rowData.push(data);

            // Find specific value
            if (data === "Canada") {
                console.log(`Found Canada at row : ${i}, column : ${j}`);
            }
        }

        console.log(rowData.join(" | "));
    }
});

test("dynamic table", async ({ page }) => {
    await page.goto("https://testuserautomation.github.io/WebTable/");
    const row = await page.locator('//table/tbody/tr').count();
    console.log("row count:" + row);
    await page.locator("//table/tbody/tr[2]/td/input[@name='select1']").click();
    const column = await page.locator("//table/tbody/tr[2]/td").count();
    console.log("Column count:" + column);
    //await page.waitForTimeout(3000);
    let arr = [];
    let arr1 = [];
    for (let i = 3; i <= row; i++) {
        await page
            .locator(`//table/tbody/tr[${i}]/td[1]//input`)
            .click();
        arr = [];
        for (let j = 2; j <= column; j++) {
            let data = await page
                .locator(`//table/tbody/tr[${i}]/td[${j}]`)
                .innerText();
            arr.push(data);
        }
        arr1.push(arr);

    }
    console.log(arr1[1].join());
    //await page.waitForTimeout(3000);
})

test.only("Money Control table", async ({ page }) => {
    await page.goto("https://www.moneycontrol.com/", {
        waitUntil: "domcontentloaded",
        timeout: 60000
    });
    const rowCount = await page.locator("//div[@id='in_tgNifty']/table/tbody/tr").count();
    const columnCount = await page.locator("//div[@id='in_tgNifty']/table/tbody/tr[1]/td").count();
    console.log(rowCount);
    console.log(columnCount);
    for (let i = 1; i <= rowCount; i++) {
        const data = await page.locator(`//div[@id='in_tgNifty']/table/tbody/tr[${i}]`).innerText();
        console.log(data);
    }

})