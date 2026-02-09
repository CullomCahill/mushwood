class PlaywrightDevPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
      this.getStartedLink = page.locator('a', { hasText: 'Get started' });
      this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
      this.pomLink = page.locator('li', {
        hasText: 'Playwright Test',
      }).locator('a', {
        hasText: 'Page Object Model',
      });
      this.tocList = page.locator('article div.markdown ul > li > a');
    }
    async getStarted() {
      await this.getStartedLink.first().click();
      await expect(this.gettingStartedHeader).toBeVisible();
    }
  
    async pageObjectModel() {
      await this.getStarted();
      await this.pomLink.click();
    }
  }
  module.exports = { PlaywrightDevPage };