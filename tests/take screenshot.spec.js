import {test,expect} from '@playwright/test';

test('take ss of facebookpage', async ({page}) =>{

    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
    await page.getByPlaceholder('Username').fill('visual_user');
    await page.getByPlaceholder('Password').pressSequentially('secret_sauce');
    await page.locator("input[data-test='login-button']").click();

    await expect(page.getByText('Products')).toBeVisible();
    await expect(page).toHaveURL(/inventory\.html/);

    await page.screenshot({path:'saucedemoHomepage.png'});
    await page.locator('#add-to-cart-sauce-labs-backpack').screenshot({path:'saucedemoButtonSS.png'});
    await page.locator('#add-to-cart-sauce-labs-backpack').hover();
    await page.pause();

})