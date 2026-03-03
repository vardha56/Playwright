// @ts-check
import { test, expect } from '@playwright/test';


test ("Tc-1 locators practice", async ({page})=>{

  await page.goto('https://www.lg.com/in/', { waitUntil: 'domcontentloaded'});
  await expect(page).toHaveTitle("Consumer & Home Electronics from LG | LG IN");

  await page.locator("#desktop-gnb_1depth_2").hover();
  
  await page.getByRole('link',{name:'webOS for Entertainment'}).click({ timeout: 10000 });
  console.log(await page.title());   

  await page.getByRole('button',{name:'Home Appliances'}).hover();
  await page.waitForTimeout(1000);
  await page.pause();

  await page.getByRole('link',{name:'All Washing Machines'}).click({ timeout: 10000 });
  await expect(page.locator('.status')).toBeVisible({ timeout: 2000 });
  await page.pause();                
  console.log(await page.title());

  //console.log(await page.title());

  // Expect for screenshot...............................................
  // await page.screenshot({path:'screenshot.png'});
  // await expect(page).toHaveScreenshot('screenshot-chromium-win32.png'); 
  // file name should be in this format in the path: example.spec.js-snapshots
  // await expect(page).toHaveScreenshot('screenshot.png');
  // expect(await page.screenshot()).toMatchSnapshot("screenshot.png")

})