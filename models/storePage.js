exports.store = class store {
    constructor(page){
        this.page = page
        // define locators
        this.buyNow = page.getByRole('button', {name: 'Buy Now'}).first()
        this.productTitleLocator = page.getByText('Drum Pendant')
        this.productCardLocator = page.locator('.productCard') //instock variant
        this.soldOutCard = page.locator('.productCard.soldOut')
        this.madeToOrderCard = page.locator('.productCard.madeToOrder')
        this.inquireButton = page.locator('.productCard.madeToOrder').first().locator('.buyButton.inquireButton')
    }

    // define actions
    async clickBuyNow(){
        await this.buyNow.click()
    }



    async gotoStore(){
        await this.page.goto('/store')
    }

}