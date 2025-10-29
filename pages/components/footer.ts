import { Page } from '@playwright/test';

export class Footer {
  constructor(private page: Page) {}
// Add methods to interact with footer links as needed not all links are present for sample test
  async clickTechnology() {
    await this.page.getByRole('link', { name: 'Technology' }).click();
  }

  async clickUseCases() {
    await this.page.getByRole('link', { name: 'Use Cases' }).click();
  }

  async clickOverview() {
    await this.page.getByRole('link', { name: 'Overview' }).click();
  }
}

