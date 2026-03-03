class MainPage{

    constructor(){
        this.page=this.page;
        this.recharge= this.page.locator("//li[@class='_2Szju'  and contains(., 'Recharge & Bills')]");

    }

    async Goto(){
        await this.page.goto("https://paytm.com/");
    }
}