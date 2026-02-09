// must export so you can access it else where
exports.LoginPage = class LoginPage {
    // creating a class in javascript class and give it a name

    // need to be able to pass page object, do this via constructor:
    constructor(page) {
        // create class variable called page for this particular class, that is the page
        this.page = page
        // init variables that are the locators:

        // `this.` attaches to the object and persists 
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: ' Login' })
        // note - these all create propertys of objects, not new variables
        
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password){
        // setup username and password as reusable variables
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

    // Atomic function = 1 function does 1 action
    /*
    enterUsername(){

    }
    enterPassword(){

    }
    clickOnLogin(){

    }
    */


}