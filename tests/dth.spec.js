import {test,expect} from '@playwright/test';
import DTHpage from '../PageObjectsPaytm/DTHpage';

test.only("Tc to navigate to DTH", async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    const dthPage = new DTHpage(page);

    await dthPage.clickDTH();
    await page.pause();

})