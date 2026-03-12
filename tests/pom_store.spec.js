import { test, expect } from '@playwright/test';
import { store } from '../models/storePage.js'



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

  await expect(storePage.productCardLocator.first()).toBeVisible()
  
  const count = await storePage.productCardLocator.count()
  expect(count).toBeGreaterThanOrEqual(6)
})



test('`madeToOrder` product shows up with inquire button and not buy now', async ({page}) => {
    const storePage = new store(page)
    await storePage.gotoStore()

    // set up inquire button for madeToOrder card
    await expect(storePage.inquireButton).toBeVisible()
    await expect(storePage.inquireButton).toHaveText('Inquire')
    
    // negative test - ensure no 'buy now' on this
    await expect(storePage.madeToOrderCard.first().getByRole('button', {name: 'Buy Now'})).not.toBeAttached()

  })
  

  test('Inquire button works on madeToOrder page', async ({page}) => {
    const storePage = new store(page)
    await storePage.gotoStore()

    // click button
    await storePage.inquireButton.click()
    await expect(page).toHaveURL(/\/inquire\/\d+/)
    await expect(page).toHaveTitle(/Inquire/)
  })



test('`soldOut` product shows a disabled Sold Out button (not Buy Now)', async ({page}) => {
  const storePage = new store(page)
  await storePage.gotoStore()

  const soldOutButton = storePage.soldOutCard.first().locator('.buyButton.soldOutButton')
  await expect(soldOutButton).toBeVisible()
  await expect(soldOutButton).toHaveText('Sold Out')
})

