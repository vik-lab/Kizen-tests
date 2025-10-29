import { Page } from '@playwright/test';

export class Header {
  constructor(private page: Page) {}

  async clickPlatform() {
    await this.page.getByRole('banner').getByRole('link', { name: 'Platform' }).click();
  }

  async clickPricing() {
    await this.page.getByRole('link', { name: ' Pricing ' }).click();
  }

  async clickAbout() {
    await this.page.getByRole('link', { name: 'About' }).click();
  }
}
