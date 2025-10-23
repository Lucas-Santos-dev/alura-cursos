import test, { expect } from "@playwright/test";

test.describe("Home Page", () => {
    test("Must visit the home page", async({ page }) => {
        await page.goto("http://localhost:4200/");
        await expect(page).toHaveTitle("Jornada Milhas");
    });
});