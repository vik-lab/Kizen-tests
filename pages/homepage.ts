import { Page } from '@playwright/test';

export class HomePage {

  constructor(private page: Page) {
  }

  async goto() {
    await this.page.goto('https://kizen.com');
  }

  async getTitle() {
    return await this.page.title();
  }
}
