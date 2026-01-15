export class BasePage {
  page: any;
  constructor(page: any) {
    this.page = page;
  }

  async navigateToBasePage() {
    await this.page.goto("/");
  }
}
