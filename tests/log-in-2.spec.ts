import { expect, test } from "@playwright/test";
import navigateHomePage from "./customCommands/navigateHomePage";
import { LoginPage } from "./fixtures/LoginPage";
import { INVALID_USER, VALID_USER } from "./testData/userCredentials";
import navigateLoginPage from "./customCommands/navigateLoginPage";

test.describe("User ", () => {
  test.beforeEach(async ({ page }) => {
    await navigateHomePage(page);
    await navigateLoginPage(page);
  });

  test(" can Log in with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginWithValidCredentials(
      VALID_USER.email,
      VALID_USER.password
    );
    // Assertion: user logged in
    await expect(
      page.getByTitle("View my customer account")
    ).toBeVisible();
    await expect(page.locator(".logout")).toBeVisible();
  });

  test(" cant Log in with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginWithInvalidCredentials(
      INVALID_USER.email,
      INVALID_USER.password
    );
    // Assertion: error message is displayed
    await expect(
      page.locator("ul li:has-text('Authentication failed.')")
    ).toBeVisible();
  });
});
