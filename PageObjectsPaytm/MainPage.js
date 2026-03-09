class MainPage{

    constructor(page){
        this.page= page;
        
        //Recharge & Bills
        this.recharge= page.locator("//li[@class='_2Szju'  and contains(., 'Recharge & Bills')]");
        this.mobileRecharge= page.locator("//li[text()='Recharge & Bills']//preceding::a[text()='Mobile Recharge']");

        //Payments & Services
        this.paymsAndServ= page.locator("//li[@class='_2Szju' and contains(., 'Payments & Services')]");
        this.paymnt= page.locator("//li[text()='Payments & Services']//preceding::a[text()='Payments']");
        //bills paymnt and recharges
        this.Bpr= page.locator("//a[@href='https://paytm.com/recharge-bill-payment']");


    }

    //function to navigate
    async Goto(){
        await this.page.goto("https://paytm.com/");
        console.log(await this.page.title());
    }

    async GotoMobRecharge(){
        await this.recharge.hover();
        await this.mobileRecharge.click();
        console.log(await this.page.title());
    }

    async GotoPaymServc(){
        await this.paymsAndServ.hover();
        await this.paymnt.hover();
        await this.Bpr.click();
        console.log(await this.page.title());
    }
}

export default MainPage;

