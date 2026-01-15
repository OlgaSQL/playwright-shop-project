import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker/locale/af_ZA";
import navigateHomePage from "./customCommands/navigateHomePage";

test.describe("User ", () => {
  test.beforeEach(async ({ page }) => {
    await navigateHomePage(page);
  });

  test(" can successfully subscribe to newsletter with valid email", async ({
    page,
  }) => {
    const email = faker.internet.email();
    await page.getByPlaceholder("Your email address").fill(email);

    const responsePromise = page.waitForResponse(
      (response) =>
        response.url().includes("subscription") &&
        response.request().method() === "POST"
    );

    await page.getByRole("button", { name: "Subscribe" }).click();

    await responsePromise;

    await expect(
      page.getByText("You have successfully subscribed to this newsletter.")
    ).toBeVisible();
  });
});
