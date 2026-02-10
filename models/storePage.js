exports.store = class store {
    constructor(page){
        this.page = page
        // define locators
        this.buyNow = page.getByRole('button', {name: 'Buy Now'}).first()
        this.productTitleLocator = page.getByText('MUSHROOM LAMP 1')
        this.productCardLocator = page.locator('.productCard')
    }

    // define actions
    async clickBuyNow(){
        await this.buyNow.click()
    }

    async gotoStore(){
        await this.page.goto('/store')
    }

}