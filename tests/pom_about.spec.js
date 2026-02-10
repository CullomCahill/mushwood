import { test, expect } from '@playwright/test';
import { store } from '../models/storePage.js'
import { navigation } from '../models/navigation.js'
import { about } from '../models/aboutPage.js'

test('title exists on about page', async ({page}) => {
    const aboutPage = new about(page)
    // call locators
    await aboutPage.gotoAbout()
    await expect(aboutPage.title.first()).toBeVisible()
})

test('text block exists on about page', async ({page}) => {
    const aboutPage = new about(page)
    // call locators
    await aboutPage.gotoAbout()
    await expect(aboutPage.text.first()).toBeVisible()
})


test('image exists on about page', async ({page}) => {
    const aboutPage = new about(page)
    // call locators
    await aboutPage.gotoAbout()
    await expect(aboutPage.image).toBeVisible()
})