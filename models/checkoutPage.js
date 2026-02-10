exports.checkout = class checkout{
    constructor(page){
        this.page = page
        // locators:
        // this - as in within this current object you define "emailBox"
        // then where.whatType('what exactly')
        this.emailBox = page.locator('#email')
        // so getByRole takes two arguments: the role, then the value
        this.paymentButton = page.getByRole('button', {name: 'Proceed to Payment'})
    }

    // actions:
    async gotoCheckout(){
        await this.page.goto('/checkout/1')
    }

    // this sets up 'myemail' as default parameter 
    // but you can override if you put something else in
    async fillEmail(email = 'myemail@gmail.com'){
        await this.emailBox.click()
        await this.emailBox.fill(email)
    }
    async proceedToPayment(){
        await this.paymentButton.click()
    }

}