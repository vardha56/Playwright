import {test, expect} from '@playwright/test';

test("TC to navigate through Paytm site", async({page})=>{

    await page.goto("https://paytm.com/", {waitUntil:'domcontentloaded'});
    await page.pause();
    await page.getByText("Payments & Services").click();
    
})