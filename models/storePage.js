exports.store = class store {
    constructor(page){
        this.page = page
        // define locators
        this.productCard = page.locator('.productCard')
        this.buyNow = page.getByRole('button', {name: 'Buy Now'}).first()
        this.productTitleLocator = page.getByText('MUSHROOM LAMP 1')
        this.productCardLocator = page.locator('.productCard')
    }

    // define actions
    async buyNowButton(){
        await this.buyNow.click()
    }

}