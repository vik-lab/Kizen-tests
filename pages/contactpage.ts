import { Page } from "@playwright/test";

export class ContactPage {
    
    constructor(private page: Page) {}
    
    async goto() {
        await this.page.goto('/contact-sales');
    }

    async fillContactForm(firstName: string, lastName: string, email: string, role: string, phoneNumber: string, company: string, message: string) {
        //await this.page.getByRole('textbox', { name: 'Enter Text' }).first().fill(firstName);
        await this.page.locator('section').filter({ hasText: 'Turn your ideas into reality' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Enter Text' }).first().fill(firstName);
        // fill last name
        await this.page.locator('section').filter({ hasText: 'Turn your ideas into reality' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Enter Text' }).nth(1).fill(lastName);
        // fill email
        await this.page.locator('section').filter({ hasText: 'Turn your ideas into reality' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Email@Domain.com' }).fill(email);
        // fill role
        await this.page.locator('section').filter({ hasText: 'Turn your ideas into reality' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Enter Text' }).nth(2).fill(role);
        // fill phone number
        await this.page.locator('section').filter({ hasText: 'Turn your ideas into reality' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Phone Number' }).fill(phoneNumber);
        // fill company name
        await this.page.locator('section').filter({ hasText: 'Turn your ideas into reality' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Company Name' }).fill(company);
        // fill message
        await this.page.locator('section').filter({ hasText: 'Turn your ideas into reality' }).locator('iframe').contentFrame().getByRole('textbox', { name: 'Enter Text' }).nth(3).fill(message);
    }

    async submitForm() {
        await this.page.locator('section').filter({ hasText: 'Turn your ideas into reality' }).locator('iframe').contentFrame().getByRole('button', { name: 'Submit' }).click();
    }

    async getSuccessMessage() {
        return await this.page.textContent('.success-message');
    }
}   