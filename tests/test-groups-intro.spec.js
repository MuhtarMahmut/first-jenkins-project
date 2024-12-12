import { test } from "@playwright/test";

test.describe("User story01 @user01", async () => {
  // create beforeAll.
  test.beforeAll(async () => {
    console.log("BeforeAll function is executed.");
  });

  // create afterAll.
  test.afterAll(async () => {
    console.log("AfterAll function is executed.");
  });

  // create beforeEach.
  test.beforeEach(async ({ page }) => {
    console.log("BeforeEach function is executed.");
  });

  // create afterEach.
  test.afterEach(async ({ page }) => {
    console.log("AfterEach function is executed.");
  });

  test("Test case01", async ({ page }) => {
    console.log("Test case 1 is expected");
  });

  test("Test case02", async ({ page }) => {
    console.log("Test case 2 is expected");
  });

  test("Test case03", async ({ page }) => {
    console.log("Test case 3 is expected");
  });

});



