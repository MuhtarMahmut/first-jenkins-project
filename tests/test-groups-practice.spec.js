import { test } from "@playwright/test";

test.describe("Test Group", () => {
  // create beforeEach.
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    await page.waitForTimeout(3000);
  });

  test("Test A", async ({ page }) => {
    console.log("Test A is expected");
  });

  test("Test B", async ({ page }) => {
    console.log("Test B is expected");
  });

  test("Test C", async ({ page }) => {
    console.log("Test C is expected");
  });

});
