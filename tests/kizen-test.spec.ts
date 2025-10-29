import { test, expect } from '../fixtures/page-objects';

test('homepage title and header visible', async ({ home }) => {
  await home.goto();
  await expect(await home.getTitle()).toContain('Kizen');
});

//header methods test example
test('navigate to sales form', async ({ page, home, header }) => {
  await home.goto();
    // use header methods to navigate
  await header.clickPlatform();
  // adding additional clicks to navigate to a specific page for test verification, not ideal but serves the purpose
  await page.getByRole('link', { name: 'Multi-Agent Orchestration Deploy a network of specially-trained AI labor to fit' }).click();
  await page.getByRole('link', { name: 'Contact an expert' }).click();
  //add additional wait as the page takes time to load
  await page.waitForLoadState('networkidle');
  await expect(await home.getTitle()).toContain('Connect With A Kizen Sales Expert');
});

//footer methods test example
test('navigate to technology overview', async ({ page, home, footer }) => {
  await home.goto();
    // use footer methods to navigate
  await footer.clickTechnology();
  //await footer.clickOverview();
  await expect(await home.getTitle()).toContain('Kizen Supports Technology Teams');
});