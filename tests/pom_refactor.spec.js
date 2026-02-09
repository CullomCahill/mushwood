// @ts-check
import { test, expect } from '@playwright/test';
import { homePage } from '../models/homePage.js'



// Home page has title
test('has title', async ({ page }) => {
    const home = new homePage(page)
    await home.gotoHomePage()
    // Expect a title to be right
    await expect(page).toHaveTitle("MushWood - Handcrafted Mushroom Woodworking - MushWood");    
});

// About Link in header works
test('about link works', async ({ page }) => {
    // call the class in this function
    const home = new homePage(page)
    // go to the homepage
    await home.gotoHomePage()
    // Go click on the about link from the homepage
    await home.clickAbout()

    // expect it to take you to the about
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole( 'heading', {name: 'about'})).toBeVisible()

    /* old test:
    await page.goto('/');
    // Go click on the about link from the homepage
    await page.getByRole('link', {name: 'about'}).click();
    // expect it to take you to the about
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole( 'heading', {name: 'about'})).toBeVisible()
    */
})


// Store link in header works
test('store link works', async ({ page }) => {
    const home = new homePage(page)
    await home.gotoHomePage()
    await home.clickStore()

    await expect(page).toHaveURL('/store')
    await expect(page.getByRole( 'heading', {name: 'store'})).toBeVisible()

    /* old test:
    await page.goto('/');
    // Go click on the about link from the homepage
    await page.getByRole('link', {name: 'store'}).click();
    // expect it to take you to the about
    await expect(page).toHaveURL('/store');
    await expect(page.getByRole( 'heading', {name: 'store'})).toBeVisible()
    */
})
