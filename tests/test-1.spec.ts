import { test, expect } from '@playwright/test';

// A simple test to verify navigation using direct page interactions
test('test', async ({ page }) => {
  await page.goto('https://kizen.com/');
  await page.getByRole('banner').getByRole('link', { name: 'Platform' }).click();
  await page.getByRole('link', { name: 'Multi-Agent Orchestration Deploy a network of specially-trained AI labor to fit' }).click();
  await page.getByRole('link', { name: 'Contact an expert' }).click();
  //add additional wait as the page takes time to load
  await page.waitForLoadState('networkidle');
  //assertion to verify navigation
  await expect(page).toHaveTitle('Connect With A Kizen Sales Expert');
});