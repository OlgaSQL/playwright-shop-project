import { test, expect } from "../fixtures/homePageFixture";
import { LoginPage } from "../pages/LoginPage";
import { INVALID_USER, VALID_USER } from "./testData/userCredentials";
import navigateLoginPage from "./customCommands/navigateLoginPage";

test.describe("User ", () => {
  test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
    await navigateLoginPage(page);
  });

  test(" can Log in with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(VALID_USER.email);
    await loginPage.fillPassword(VALID_USER.password);
    await loginPage.clickSignInButton();

    await expect(page.getByTitle("View my customer account")).toBeVisible();
    await expect(page.locator(".logout")).toBeVisible();
  });

  test(" cant Log in with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillEmail(INVALID_USER.email);
    await loginPage.fillPassword(INVALID_USER.password);
    await loginPage.clickSignInButton();

    await expect(
      page.locator("ul li:has-text('Authentication failed.')")
    ).toBeVisible();
  });
});
