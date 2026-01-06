import { type Page } from "@playwright/test";

/**
 * custom command to navigate to home page
 * @param page Playwright Page
 */
export async function navigateHomePage(page: Page) {
  await page.goto("/");
}

export default navigateHomePage;
