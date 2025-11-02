import { Page } from '@playwright/test';

export class HomePage {

  constructor(private page: Page) {
  }

  async goto(p0: string) {
    await this.page.goto('/');
  }

  async getTitle() {
    return await this.page.title();
  }
}
