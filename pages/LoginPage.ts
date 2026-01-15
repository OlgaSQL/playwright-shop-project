import { expect } from "@playwright/test";
export { expect } from "playwright/test";

export class LoginPage {
  page: any;
  constructor(page: any) {
    this.page = page;
  }

  async fillEmail(email: string) {
    await this.page.locator('input[id="field-email"]').fill(email);
  }

  async fillPassword(password: string) {
    await this.page.locator('input[id="field-password"]').fill(password);
  }

  async clickSignInButton() {
    await this.page.getByRole("button", { name: "Sign in" }).click();
  }

  async loginWithValidCredentials(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignInButton();
  }

  async loginWithInvalidCredentials(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignInButton();
  }
}
