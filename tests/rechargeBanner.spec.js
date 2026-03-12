import {test,expect} from '@playwright/test';
import Recharge from '../PageObjectsPaytm/Recharge';

test("TC to navigatte to Recharge Banner 1", async({page})=>{

    // const context= await browser.newContext();
    // const page= await context.newPage();

    const rechargeBanner= new Recharge(page);

    await rechargeBanner.Navigate();
})