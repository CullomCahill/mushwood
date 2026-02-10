exports.checkout = class checkout{
    constructor(page){
        this.page = page
        // locators:
        // this - as in within this current object you define "emailBox"
        // then where.whatType('what exactly')
        this.emailBox = page.locator('#email')
        this.paymentButton = page.getByRole('button' {name: 'Proceed to Payment'})
    }

    // actions:
    async gotoCheckout(){
        await gotoURL('/checkout/1')
    }

    // click email box
    async clickEmail(){
        await this.emailBox.click()
        await this.emailBox.fill('myemail@gmail.com')
    }

    async proceedToPayment(){
        await this.paymentButton.click()
    }

}