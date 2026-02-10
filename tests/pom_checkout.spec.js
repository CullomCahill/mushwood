import { test, expect } from '@playwright/test'
import { checkout } from '../models/checkoutPage.js'
import { navigation } from '../models/navigation.js'
import { store } from '../models/storePage.js'

// so test takes 2 arguments, name, then the test
// which here we're setting up as an async function targeted at page
// {page} is playwright giving you a fresh browser page - built in feature
test('enter email', async ({ page }) => {
    // this initializes all the locators on the page
    const checkoutPage = new checkout(page)
    // Perform actions to set up for assertions:
    await checkoutPage.gotoCheckout()
    await checkoutPage.fillEmail()

    // assertions
    // must use "toHaveValue" if checking an input field
    // toContainText - this only checks for visible text content in an element (like <p> <div> etc html stuff)
    await expect(checkoutPage.emailBox).toHaveValue('myemail@gmail.com')
})

test('no email checkout error', async ({page}) => {
    const checkoutPage = new checkout(page)
    await checkoutPage.gotoCheckout()
    await checkoutPage.proceedToPayment()
    
    // ensure that warning pops up
    const message = await checkoutPage.emailBox.evaluate(el => el.validationMessage)
    // evaluate - lets you run a javascript element in the browser
    // el is the actual DOM element - here it's email input (call it whatever you want)
    // .validationMessage - is built-in property every form input has in browser
    // use .evaluate to access any DOM property
    expect(message).toContain('fill out this field')
})

test('successful checkout', async ({page}) => {
    const checkoutPage = new checkout(page)
    await checkoutPage.gotoCheckout()
    await checkoutPage.fillEmail()
    await checkoutPage.proceedToPayment()

    // user email is stored and added to next page
    await expect(page).toHaveURL(/checkout.stripe.com/)
    await expect(page.locator('.ReadOnlyFormField-title')).toContainText('myemail@gmail.com')
})
