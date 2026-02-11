// @ts-check
import { test, expect } from '@playwright/test';
import { navigation } from '../models/navigation.js'


// Home page has title
test('has title', async ({ page }) => {
    const navHeader = new navigation(page)
    await navHeader.gotoHomePage()
    // Expect a title to be right
    await expect(page).toHaveTitle("MushWood - Handcrafted Mushroom Woodworking - MushWood");    
});

// About Link in header works
test('about link works', async ({ page }) => {
    // call the class in this function
    const navHeader = new navigation(page)
    // go to the homepage
    await navHeader.gotoHomePage()
    // Go click on the about link from the homepage
    await navHeader.clickAbout()

    // expect it to take you to the about
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole( 'heading', {name: 'about'})).toBeVisible()

})


// Store link in header works
test('store link works', async ({ page }) => {
    const navHeader = new navigation(page)
    await navHeader.gotoHomePage()
    await navHeader.clickStore()

    await expect(page).toHaveURL('/store')
    await expect(page.getByRole( 'heading', {name: 'store'})).toBeVisible()
})

// Home Link in header works
test('home link works', async ({ page }) => {
    const navHeader = new navigation(page)
    await navHeader.gotoHomePage()
    await navHeader.clickHome()

    await expect(page).toHaveURL('/')
    await expect(page).toHaveTitle("MushWood - Handcrafted Mushroom Woodworking - MushWood")
})