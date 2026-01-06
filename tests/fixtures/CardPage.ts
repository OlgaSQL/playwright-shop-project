import { expect } from "playwright/test";

export class CardPage {
  pressContinueShopping() {
    throw new Error("Method not implemented.");
  }
  addItemToCart() {
    throw new Error("Method not implemented.");
  }
  page: any;
  constructor(page: any) {
    this.page = page;
  }

  async verifyProductInCart(productName: string) {
    await expect(this.page.getByText(productName)).toBeVisible();
  }

  async verifyProductQuantity(quantity: string) {
    await expect(
      this.page.locator('input[name="product-quantity-spin"]')
    ).toHaveValue(quantity);
  }

  async decreaseProductInCart() {
    await this.page
      .locator('button i[class="material-icons touchspin-down"]')
      .click();
  }

  async increaseProductInCart() {
    await this.page
      .locator('button i[class="material-icons touchspin-up"]')
      .click();
  }

  async processToCheckout() {
    await this.page.getByRole("link", { name: "Proceed to checkout" }).click();
  }
}
