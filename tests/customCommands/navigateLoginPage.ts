import { type Page } from "@playwright/test";

/**
 * custom command to navigate to home page
 * @param page Playwright Page
 */
export async function navigateLoginPage(page: Page) {
  await page
      .locator(
        'a[title="Log in to your customer account"] span:text("Sign in")'
      )
      .click();
}

export default navigateLoginPage;
