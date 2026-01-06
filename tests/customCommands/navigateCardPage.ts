import { type Page } from "@playwright/test";

/**
 * Custom command open item page
 * @param page Playwright Page
 */
export async function navigateCardPage(page: Page) {
  await page.getByRole("link", { name: "Cart" }).click();
}

export default navigateCardPage;
