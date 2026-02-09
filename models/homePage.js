/*
in the page.js files we are: 
- creating a class that we export then use in the tests 
- the class has all the functions created
- the test then can execute those functions
*/

exports.homePage = class homePage {
    // locators, find the things you need:
    constructor(page) {
        this.page = page
        // here you're defining the methods:
        this.aboutLink = page.getByRole('link', { name: 'About' })
        this.storeLink = page.getByRole('link', { name: 'Store' })
    }

    // actions - define the functions

    async gotoHomePage() {
        await this.page.goto('/') //if you want to leave home page hardcoded
    }

    // click about page 
    async clickAbout() {
        await this.aboutLink.click()
    }

    // click store page
    async clickStore() {
        await this.storeLink.click()
    }

}