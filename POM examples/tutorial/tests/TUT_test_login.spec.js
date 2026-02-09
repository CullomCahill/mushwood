import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/TUT_class_login'

test('test', async ({ page }) => {

    // bring the class in:
    const login = new LoginPage(page)

    // now this replaces the below:
    await login.gotoLoginPage()
    await login.login('tomsmith', 'SuperSecretPassword!') // these variables were defined in login.js
});