import { test, expect } from "@playwright/test";
import navigateHomePage from "./customCommands/navigateHomePage";
import { items } from "./testData/items";

test.describe("User ", () => {
  test.beforeEach(async ({ page }) => {
    await navigateHomePage(page);
  });

  test(" can search for item", async ({ page }) => {
    const item = items[0];
    await page.getByPlaceholder("Search our catalog").fill(item.itemsName);
    await page.getByPlaceholder("Search our catalog").press("Enter");
    await expect(page.getByText(item.itemsName, { exact: true })).toBeVisible();
  });
});
