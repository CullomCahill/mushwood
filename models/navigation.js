/*
in the page.js files we are: 
- creating a class that we export then use in the tests 
- the class has all the functions created
- the test then can execute those functions
*/

exports.navigation = class navigation {
    // locators, find the things you need:
    constructor(page) {
        this.page = page
        // here you're defining the methods:
        this.aboutLink = page.getByRole('link', { name: 'About' })
        this.storeLink = page.getByRole('link', { name: 'Store' })
        this.homeLink = page.getByRole('link', { name: 'Home'})
    }

    // actions - define the functions
    async gotoHomePage() {
        await this.page.goto('/') //if you want to leave home page hardcoded
    }

    // click home
    async clickHome(){
        await this.homeLink.click()
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