import { test } from "@playwright/test";
import addFilter from "./customCommands/addFilter";
import verifyFilter from "./customCommands/verifyFilter";
import { filters } from "./testData/filters";
import navigateHomePage from "./customCommands/navigateHomePage";
import navigateSection from "./customCommands/navigateSection";
import { sections } from "./testData/sections";

test.describe("Filter", () => {
  test.beforeEach(async ({ page }) => {
    await navigateHomePage(page);
    await navigateSection(page, sections.clothes);
  });

  for (const { filter, filterValue } of filters) {
    test(` ${filterValue} can be checked and visible`, async ({ page }) => {
      await addFilter(page, filter);
      await verifyFilter(page, filterValue);
    });
  }
});
