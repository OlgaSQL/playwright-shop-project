import { expect, type Page } from "@playwright/test";

/**
 * Custom command to verify filter
 * @param page Playwright Page
 * @param filterValue string
 */
export async function verifyFilter(page: Page, filterValue: string) {
  // await expect(
  //  page.locator("li.filter-block", { hasText: `${filterValue}` })
  //).toBeVisible();

  await expect(
    page.locator("li.filter-block", { hasText: filterValue })
  ).toBeVisible();
}

export default verifyFilter;
