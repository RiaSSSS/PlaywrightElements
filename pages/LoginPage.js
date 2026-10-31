import { expect } from "@playwright/test"
export class LoginPage {

    constructor(page) {
        this.page = page
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.Dashboard = page.locator("//h6[text()='Dashboard']");
    }

    async navigateURL() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/');
    }
    async loginOrange(username, password) {
        const loginUsername = process.env.TEST_USERNAME || username;
        const loginPassword = process.env.TEST_PASSWORD || password;

        await this.usernameInput.fill(loginUsername);
        await this.passwordInput.fill(loginPassword);
        await this.loginButton.click();
    }
    async verifyLogin() {
        await expect(this.Dashboard).toHaveText("Dashboard");
    }
}