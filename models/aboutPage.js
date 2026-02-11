exports.about = class about {
    constructor(page){
        this.page = page
        // locators:
        this.title = page.locator('.textSection h1')
        this.image = page.locator('.imageSection img')
        this.text = page.locator('.textSection p')
    }
    //actions
    async gotoAbout(){
        await this.page.goto('/about')
    }

}