import navigateHomePage from "./customCommands/navigateHomePage";
import { items } from "./testData/items";
import navigateItemPage from "./customCommands/navigateItemPage";
import { ItemPage } from "./fixtures/ItemPage";
import test from "playwright/test";

test.describe("Page item", () => {
  test.beforeEach(async ({ page }) => {
    await navigateHomePage(page);
  });

  test(" can be opened and verified", async ({ page }) => {
    const item = items[0];
    await navigateItemPage(page, item.itemsName);
    const itemPage = new ItemPage(page);
    await itemPage.verifyItemDetails(item);
  });
});
