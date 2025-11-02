import { test, expect } from '../fixtures/page-objects';
import { ContactPage } from '../pages/contactpage';

test('homepage title and header visible', async ({ home }) => {
  await home.goto('/');
  await expect(await home.getTitle()).toContain('Kizen');
});

//header methods test example
test('navigate to sales form', async ({ page, home, header }) => {
  await home.goto('/contact-sales');
    // use header methods to navigate
  await header.clickPlatform();
  await page.getByRole('link', { name: 'Multi-Agent Orchestration Deploy a network of specially-trained AI labor to fit' }).click();
  await page.getByRole('link', { name: 'Contact an expert' }).click();
  //add additional wait as the page takes time to load
  await page.waitForLoadState('networkidle');  
  // assertion to verify the sales form is loaded
  await expect(page.locator('.kz-form-wrap')).toBeVisible();
  await expect(await home.getTitle()).toContain('Connect With A Kizen Sales Expert');
});

//fill contact form test example
test('fill and submit contact form', async ({ page, contactPage }) => {
  await contactPage.goto();

 // Pass each argument individually
  await contactPage.fillContactForm(
    'Vikram',
    'Test',
    'test@test.com',
    'Tester',
    '1111111111',
    'Test Company',
    'This is a test message.'
  );
  await contactPage.submitForm();
  // close the page after submission
  // wait for any post-submission actions
  await page.screenshot({ path: 'contact-form-submission.png' });
  //await page.close();
  // Optionally, verify success message
  // const successMessage = await contactPage.getSuccessMessage();
  // await expect(successMessage).toContain('Thank you for contacting us');
});

//footer methods test example
test('navigate to technology overview', async ({ page, home, footer }) => {
  await home.goto('/');
    // use footer methods to navigate
  await footer.clickTechnology();
  //add additional wait as the page takes time to load
  await page.waitForLoadState('networkidle');
  //assertion to verify navigation
  await expect(await home.getTitle()).toContain('Kizen Supports Technology Teams');
});