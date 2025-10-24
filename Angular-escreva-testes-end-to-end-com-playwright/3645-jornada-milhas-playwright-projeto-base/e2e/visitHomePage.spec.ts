import test, { expect } from "@playwright/test";

test.describe("Home Page", () => {
    test("Must visit the home page", async({ page }) => {
        await page.goto("http://localhost:4200/"); //action

        await expect(page).toHaveTitle("Jornada Milhas"); //asserção

        const titleTickets = page.getByRole('heading', { name: 'Passagens' });

        await expect(titleTickets).toBeVisible();
    }); 
});