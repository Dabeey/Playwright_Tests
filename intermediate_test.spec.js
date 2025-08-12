const {test, expect} = require('@playwright/test');
const baseUrl = 'https://example.com';

// test.beforeAll(async () => {
//     console.log('🚀 Starting test suite…');
// });

test.beforeEach(async ({page}) => {
    await page.goto(baseUrl);
});

test.afterEach(async () => {
    console.log("✅ Test finished.");
});

// test.afterAll(async () => {
//     console.log("🛑 Test suite complete.");
// })

test('Check Title', async ({page}) => {
    await page.goto(baseUrl);
    await expect(page).toHaveTitle('Example Domain');
});

test('Check URL', async ({page}) => {
    await page.goto(baseUrl);
    await expect(page).toHaveURL(baseUrl);
});

test('Check Element Visibility', async ({page}) => {
    await page.goto(baseUrl);
    const element = await page.$('h1');
    expect(element).toBeTruthy();
});

test('Check Element Text' , async ({page}) => {
    await page.goto(baseUrl);
    const element = await page.$('h1');
    const text = await page.evaluate(el => el.textContent, element);
    expect(text).toBe('Example Domain');
});

test('Check heading @smoke', async ({ page }) => {
    await page.goto(baseUrl);
    const heading = await page.locator('h1');
    await expect(heading).toHaveText('Example Domain');
});