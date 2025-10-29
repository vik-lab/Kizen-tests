import { test as base, expect as baseExpect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { Header } from '../pages/components/header';
import { Footer } from '../pages/components/footer';
// ...existing code...
type TestFixtures = {
  home: HomePage;
  header: Header;
  footer: Footer;
};

export const test = base.extend<TestFixtures>({
  home: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  header: async ({ page }, use) => {
    await use(new Header(page));
  },

  footer: async ({ page }, use) => {
    await use(new Footer(page));
  },
});

// re-export Playwright expect directly
export const expect = baseExpect;