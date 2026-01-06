import { type Page } from "@playwright/test";

/**
 * Custom command to add item to backet
 * @param page Playwright Page
 * @param filter string
 */
export async function addFilter(page: Page, filter: string) {
  await page
    .locator(`input[type="checkbox"][data-search-url*="${filter}"]`)
    .check();
}

export default addFilter;
