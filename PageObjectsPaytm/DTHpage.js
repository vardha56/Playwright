import { TIMEOUT } from "node:dns";

class DTHpage{

    constructor(page){
        this.page=page;
        this.link="https://paytm.com/dth-recharge";
        this.DTHbtn = page.locator("//span[text()='DTH Recharge']");

        //this.SelOpertr = page.locator("//label[text()='DTH Operator']/preceding-sibling::input");
        this.SelOpertr = page.getByLabel('DTH Operator');
        this.TataPlay = page.locator("//span[text()='Tata Play (Formerly Tata Sky)']");
        this.FillNmbr = page.locator("//label[text()='Mobile Number or Subscriber ID']");
        this.ProceedBtn = page.locator("//button[@class='_11kC  _15qf _2qE6']");

    }

    async clickDTH(){
        await this.page.goto(this.link);
        //await this.DTHbtn.click();
    
        await this.SelOpertr.click({timeout:60000})
        await this.TataPlay.click();
        await this.FillNmbr.fill("88888888");
        await this.ProceedBtn.click();
    }
}

export default DTHpage;