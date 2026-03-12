class Recharge{

    constructor(page){
        this.page=page;
        //this.link="https://paytm.com/";
        this.Recharge= page.locator("//img[@alt='Banner 1']");
        this.MobPostPaid= page.locator("//span[text()='Mobile Postpaid']");

    }

    async Navigate(){
        await this.page.goto("https://paytm.com/", )
        //await this.page.goto(this.link);
        await this.Recharge.click();
        await this.MobPostPaid.click();
    }
}

export default Recharge;