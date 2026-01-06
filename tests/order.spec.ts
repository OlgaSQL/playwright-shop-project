import test, { expect } from "playwright/test";
import navigateHomePage from "./customCommands/navigateHomePage";
import { items } from "./testData/items";
import { fakeUser } from "./testData/userInfo";
import NavigateItemPage from "./customCommands/navigateItemPage";
import { ItemPage } from "./fixtures/ItemPage";
import { CardPage } from "./fixtures/CardPage";
import { OrderPage } from "./fixtures/orderPage";

test.describe("User ", () => {
  test.beforeEach(async ({ page }) => {
    navigateHomePage(page);
  });

  test("can order item", async ({ page }) => {
    const itemPage = new ItemPage(page);
    const cardPage = new CardPage(page);
    const orderPage = new OrderPage(page);

    // Navigate to item page and add item to cart and proceed to checkout
    await NavigateItemPage(page, items[0].itemsName);
    await itemPage.addItemToCart();
    await itemPage.processToCheckout();
    await cardPage.processToCheckout();

    // Fill personal information
    await orderPage.fillPersonalInfo({
      title: "Mrs.",
      firstName: fakeUser.firstName,
      lastName: fakeUser.lastName,
      email: fakeUser.email,
      password: fakeUser.password,
      agreeToTerms: true,
    });

    // Fill address information
    await orderPage.fillAddress({
      alias: fakeUser.alias,
      firstName: fakeUser.firstName,
      lastName: fakeUser.lastName,
      company: fakeUser.company,
      address: fakeUser.address,
      addressComplement: fakeUser.addressComplement,
      city: fakeUser.city,
      postalCode: fakeUser.postalCode,
      phone: "0467896543",
      state: fakeUser.state,
      country: fakeUser.country,
    });

    // Proceed shipping method
    await orderPage.proceedShipping();

    // Proceed payment method
    await orderPage.choosePayment("bankWire", true);

    // Confirm order
    await orderPage.confirmOrder();
  });
});
