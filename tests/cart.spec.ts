import { test } from "@playwright/test";
import navigateHomePage from "./customCommands/navigateHomePage";
import { items } from "./testData/items";
import navigateCardPage from "./customCommands/navigateCardPage";
import { CardPage } from "./fixtures/CardPage";
import navigateItemPage from "./customCommands/navigateItemPage";
import { ItemPage } from "./fixtures/ItemPage";
import navigateSection from "./customCommands/navigateSection";
import { sections } from "./testData/sections";

test.describe("User", () => {
  test.beforeEach(async ({ page }) => {
    await navigateHomePage(page);
  });

  test(" can add few items to the basket and next delete them", async ({
    page,
  }) => {
    await navigateSection(page, sections.art);

    //add 2 items to the cart
    const item = items[0];
    await navigateItemPage(page, item.itemsName);
    for (let count = 0; count < 2; count++) {
      const itemPage = new ItemPage(page);
      await itemPage.addItemToCart();
      await itemPage.pressContinueShopping();
    }

    await navigateCardPage(page);
    const cardPage = new CardPage(page);
    await cardPage.verifyProductInCart(item.title);
    await cardPage.verifyProductQuantity("2");

    //delete one item from the cart
    await cardPage.decreaseProductInCart();
    await cardPage.verifyProductQuantity("1");

    //Add one more item to the cart
    await cardPage.increaseProductInCart();
    await cardPage.verifyProductQuantity("2");
  });
});
