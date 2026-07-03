import { test, expect } from "@playwright/test";

test("gibt Rabatt ab 100 Euro", async ({ page }) => {
  await page.goto("/");
  await page.fill("#amount", "100");
  await page.click("#btn");

  await expect(page.locator("#result")).toHaveText("90");
});
