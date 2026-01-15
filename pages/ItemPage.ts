import { expect } from "@playwright/test";

export class ItemPage {
  page;
  constructor(page) {
    this.page = page;
  }

  async addItemToCart() {
    await this.page.getByRole("button", { name: "Add to cart" }).click();
  }

  async verifyItemDetails(item) {
    await expect(
      this.page.getByRole("heading", {
        name: item.title,
      })
    ).toBeVisible();
    await expect(
      this.page.locator("span.current-price-value", { hasText: item.price })
    ).toBeVisible();
  }

  async pressContinueShopping() {
    await this.page.getByRole("button", { name: "Continue shopping" }).click();
  }

  async processToCheckout() {
    await this.page.getByRole("link", { name: "Proceed to checkout" }).click();
  }
}
