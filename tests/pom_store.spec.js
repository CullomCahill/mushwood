import { test, expect } from '@playwright/test';
import { store } from '../models/storePage.js'
import { navigation } from '../models/navigation.js'

// write your tests
test('click buy now button', async ({ page }) => {
  // pull in the class
  const storePage = new store(page)
  // Go to the home page then store page
  await storePage.gotoStore()
  // await the function you'll use from the class - class.function()
  await storePage.clickBuyNow()
  // assertion
  await expect(page).toHaveURL('/checkout/1')
  await expect(page).toHaveTitle(/Checkout/)
})

test('First product title visible', async ({page}) => {
  const storePage = new store(page)
  // Go to the home page then store page
  await storePage.gotoStore()

  // assertion
  await expect(storePage.productTitleLocator).toBeVisible()
  // 
})

test('store has at least 6 products', async ({page}) => {
  const storePage = new store(page)
  await storePage.gotoStore()

  // assertions
  // first card exists
  await expect(storePage.productCardLocator.first()).toContainText(/mushroom lamp 1/i) // i = case insensitive 
  await expect(storePage.productCardLocator).toHaveCount(6)
  await expect(storePage.productCardLocator).not.toHaveCount(5)
})

