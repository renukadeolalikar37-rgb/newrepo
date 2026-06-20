import {expect,test} from '@playwright/test'

test('locators1',async ({page} )=> {

    await page.goto('https://www.saucedemo.com/')

     const t =  await page.title()
     console.log(t)

     await page.getByRole('input',{name : 'user-nam'}).fill('renu_usr')
     await page.getByRole('input',{name : 'password'}).fill('pass@123')
     await page.getByRole('input',{name : ;login-button}).click()


     test('test2',async ({page}) => {

        await page.goto('https://www.saucedemo.com/')

        const title = await page.title()

        

     })


})