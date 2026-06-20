import {expect,test} from '@playwright/test'

test('test_title', async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const title=await page.title();
console.log(title);
await expect().toHaveTitle("/Automation Testing Practice/");

})