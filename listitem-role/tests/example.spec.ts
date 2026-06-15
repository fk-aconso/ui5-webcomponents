import { test, expect } from "@playwright/test";

test("get list item", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveTitle("List Item Accessibility");

  await expect(page.getByRole("listitem", { name: "Pineapple" })).toBeVisible();
});
