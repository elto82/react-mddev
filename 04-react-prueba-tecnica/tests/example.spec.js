// @ts-check
import { test, expect } from "@playwright/test";
const CAT_PREFIX = "https://cataas.com";

const LOCALHOST_URL = "http://127.0.0.1:5173/";
test("app show random fact and iamge", async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX)).toBeTruthy();
});
