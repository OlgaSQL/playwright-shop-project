import { type Page } from "@playwright/test";

/**
 * custom command to navigate to home page
 * @param page Playwright Page
 * @param section - section to navigate to
 */
export async function navigateSection(page: Page, section: string) {
  await page.getByRole("link", { name: section }).click();
}

export default navigateSection;
