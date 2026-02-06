// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/'); //baseURL set up in playwright.config.js for mushwood.art

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("MushWood - Handcrafted Mushroom Woodworking - MushWood");
});

// Store link from home page
test('store link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Store' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveTitle("Store - MushWood");
  await expect(page).toHaveURL('/store');
});

// Product page
test('products page shows art pieces', async ({ page }) => {
    await page.goto('/store');
    await expect(page).toHaveURL('/store');

    await expect(page.getByRole('heading', { name: 'Store' })).toBeVisible();
    // Pick one product and check if it's there
    await expect(page.getByText('MUSHROOM LAMP 1')).toBeVisible();
  });


// Home page loads with navigation links
test('homepage loads and nav links', async ({ page }) => {
    await page.goto('/');
    // All nav links are visibile on home page
    await expect(page.getByRole('link', {name: 'store'})).toBeVisible();
    await expect(page.getByRole('link', {name: 'about'})).toBeVisible();
})

// About link works
test('about link works', async ({ page }) => {
    await page.goto('/');
    // Go click on the about link from the homepage
    await page.getByRole('link', {name: 'about'}).click();
    // expect it to take you to the about
    await expect(page).toHaveURL('/about');
    await expect(page.getByRole( 'heading', {name: 'about'})).toBeVisible()
})

// Store link works
test('store link works', async ({ page }) => {
    await page.goto('/');
    // Go click on the about link from the homepage
    await page.getByRole('link', {name: 'store'}).click();
    // expect it to take you to the about
    await expect(page).toHaveURL('/store');
    await expect(page.getByRole( 'heading', {name: 'store'})).toBeVisible()
})

// Link back to home page works from store
test('home link works', async ({ page }) => {
    await page.goto('/store');
    // Go click on the home link from the store page
    await page.getByRole('link', {name: 'home'}).click();
    // expect it to take you to back home
    await expect(page).toHaveURL('/');
})

// Store page shows products
test('store has products', async ({ page }) => {
    await page.goto('/store');

    // check that any products exist (ie first product card is visible)
    await expect(page.locator('.productCard').first()).toBeVisible();
    // remeber adding the '.' before product card tells to look for a class, otherwise its looking for an HTML tag <productCard> which doesnt exist

    // See that there are at least 6 products available
    await expect(page.locator('.productCard')).toHaveCount(6);

    // Make sure it doesn't have 5 products
    await expect(page.locator('.productCard')).not.toHaveCount(5);
})

// Clicking a Buy Now on product brings you to checkout
test('buy now brings to checkout', async ({ page }) => {
  await page.goto('/store');
  // click the first "buy now" link
  await page.locator('.productCard').first().locator('.buyButton').click();
  // ensure you got where you wanted to
  await expect(page).toHaveURL('/checkout/1');
  await expect(page.getByRole( 'heading', {name: 'checkout'})).toBeVisible()
})

// Enter email and proceed to payment
test('checkout - enter email and proceed to payment', async ({ page }) => {
  await page.goto('/checkout/1')

  // enter email
  // remember, formGroup is a container div, not input field itself
  // target acual input with
  // . == class selector  || # == id selector
  await page.getByLabel('Email').fill("myemail@gmail.com")
  await page.locator('.checkoutForm').locator('.checkoutButton').click()
  // user email is stored and added to next page
  await expect(page).toHaveURL(/checkout.stripe.com/); // /regex/
  await expect(page.locator('.ReadOnlyFormField-title')).toContainText('myemail@gmail.com')

})