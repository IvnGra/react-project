import { expect, test } from '@playwright/test';

test('avab rakenduse ja kuvab viktoriini', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Viktoriin' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Kes neist on Eesti president?' })
  ).toBeVisible();
});

test('vastab küsimustele ja kontrollib lõpptulemust', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Alar Karis').check();
  await page.getByLabel('Paul Aaron').check();
  await page.getByLabel('Ott Kiivikas').check();

  await page.getByRole('button', { name: 'Kinnita' }).click();

  await expect(page).toHaveURL(/\/results$/);
  await expect(page.getByRole('heading', { name: 'Tulemused' })).toBeVisible();
  await expect(page.getByText('3 / 3')).toBeVisible();
  await expect(page.getByText('100%')).toBeVisible();
});

test('vale vastus vähendab punktisummat ja kuvab õige vastuse', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Mart Helme').check();
  await page.getByLabel('Paul Aaron').check();
  await page.getByLabel('Ott Kiivikas').check();

  await page.getByRole('button', { name: 'Kinnita' }).click();

  await expect(page).toHaveURL(/\/results$/);
  await expect(page.getByText('2 / 3')).toBeVisible();

  await expect(page.getByText('✗ Vale')).toBeVisible();
  await expect(page.getByText('Õige vastus:')).toBeVisible();
  await expect(page.getByText('Alar Karis')).toBeVisible();
});
