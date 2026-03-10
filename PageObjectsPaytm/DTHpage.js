class DTHpage{

    constructor(page){
        this.page=page;
        this.link="https://paytm.com/";
        this.DTHbtn = page.locator("//span[text()='DTH Recharge']");

    }

    async clickDTH(){
        await this.page.goto(this.link);
        await this.DTHbtn.click();
    }
}

export default DTHpage;