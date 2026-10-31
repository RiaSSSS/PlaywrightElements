import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    loginOrangePage: async ({ page, loginPage }, use) => {

        await loginPage.navigateURL();
        await loginPage.loginOrange('Admin', 'admin123');
        await loginPage.verifyLogin();
        await use(loginPage);
    }

});

export { test, expect };

//test.extend = playwright mchansim for creating resuable custome fixture