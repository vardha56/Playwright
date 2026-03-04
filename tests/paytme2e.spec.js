import {test, expect} from '@playwright/test';

//const{MainPage} = require("D:\Playwright\Page Objects Paytm\MainPage.js");
import MainPage from '../Page Objects Paytm/MainPage';

test("TC to navigate through Paytm site", async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    const mainPage = new MainPage(page);

    await mainPage.Goto();
    await page.pause();

    
})