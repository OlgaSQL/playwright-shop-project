import { type Page } from "@playwright/test";

/**
 * Custom command open item page
 * @param page Playwright Page
 * @param itemsName string
 */
export async function NavigateItemPage(page: Page, itemsName: string) {
  await page.getByRole("link", { name: itemsName }).click();
}

export default NavigateItemPage;
