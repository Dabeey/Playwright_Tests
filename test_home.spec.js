const {test, expect} = require('@playwright/test');

test('Test Home Page', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com');
    await expect(page).toHaveTitle('The Internet');
});