import { items } from "./testData/items";
import navigateItemPage from "./customCommands/navigateItemPage";
import { ItemPage } from "../pages/ItemPage";
import { test } from "../fixtures/homePageFixture";

test.describe("Page item", () => {
  test(" can be opened and verified", async ({ page }) => {
    const item = items[0];
    await navigateItemPage(page, item.itemsName);
    const itemPage = new ItemPage(page);
    await itemPage.verifyItemDetails(item);
  });
});
