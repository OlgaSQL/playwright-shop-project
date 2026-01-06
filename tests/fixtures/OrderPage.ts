import { expect } from "@playwright/test";

export class OrderPage {
  page: any;
  constructor(page: any) {
    this.page = page;
  }

  async fillPersonalInfo(user: {
    title?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    agreeToTerms?: boolean;
  }) {
    if (user.title) {
      await this.page.getByRole("radio", { name: user.title }).check();
    }
    await this.page
      .getByRole("textbox", { name: "First name" })
      .fill(user.firstName);
    await this.page
      .getByRole("textbox", { name: "Last name" })
      .fill(user.lastName);
    await this.page.getByRole("textbox", { name: "Email" }).fill(user.email);
    await this.page
      .getByRole("textbox", { name: "password" })
      .fill(user.password);
    if (user.agreeToTerms) {
      await this.page
        .getByRole("checkbox", {
          name: "I agree to the terms and conditions and the privacy policy",
        })
        .check();
    }
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async fillAddress(user: {
    alias?: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    address: string;
    addressComplement?: string;
    city: string;
    postalCode: string;
    phone: string;
    state?: string;
    country?: string;
  }) {
    if (user.alias)
      await this.page.getByRole("textbox", { name: "alias" }).fill(user.alias);
    if (user.firstName)
      await this.page
        .getByRole("textbox", { name: "First name" })
        .fill(user.firstName);
    if (user.lastName)
      await this.page
        .getByRole("textbox", { name: "Last name" })
        .fill(user.lastName);
    if (user.company)
      await this.page
        .getByRole("textbox", { name: "company" })
        .fill(user.company);
    await this.page
      .getByRole("textbox", { name: "Address", exact: true })
      .fill(user.address);
    if (user.addressComplement)
      await this.page
        .getByRole("textbox", { name: "Address Complement" })
        .fill(user.addressComplement);
    await this.page.getByRole("textbox", { name: "city" }).fill(user.city);
    await this.page
      .getByRole("textbox", { name: "Postal code" })
      .fill(user.postalCode);
    await this.page.getByRole("textbox", { name: "Phone" }).fill(user.phone);

    if (user.state)
      await this.page
        .getByRole("combobox", { name: "State" })
        .selectOption(user.state);
    if (user.country)
      await this.page
        .getByRole("combobox", { name: "Country" })
        .selectOption(user.country);

    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async proceedShipping() {
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async choosePayment(
    method: "bankWire" | "cheque" | string,
    acceptTerms = true
  ) {
    if (method === "bankWire") {
      await this.page.getByRole("radio", { name: "Pay by bank wire" }).check();
    } else if (method === "cheque") {
      await this.page.getByRole("radio", { name: "Pay by check" }).check();
    } else {
      // fallback: try to select by visible text
      await this.page.getByRole("radio", { name: method }).check();
    }

    if (acceptTerms) {
      await this.page
        .getByRole("checkbox", {
          name: "I agree to the terms of service and will adhere to them unconditionally.",
        })
        .check();
    }
  }

  async confirmOrder() {
    await this.page.getByRole("button", { name: "PLACE ORDER" }).click();
    await expect(
      this.page.locator("li  span:has-text('Order confirmation')")
    ).toBeVisible();
    await expect(this.page.getByText("Your order is confirmed")).toBeVisible();
  }
}
