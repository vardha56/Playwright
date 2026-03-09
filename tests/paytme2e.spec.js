import {test, expect} from '@playwright/test';

//const{MainPage} = require("D:\Playwright\Page Objects Paytm\MainPage.js");
import MainPage from '../PageObjectsPaytm/MainPage';

test.only("TC to navigate through Paytm site", async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    const mainPage = new MainPage(page);

    await mainPage.Goto();
    await mainPage.GotoMobRecharge();
    await page.pause();
    await mainPage.GotoPaymServc();
    await page.pause();

    await context.close();

    
})