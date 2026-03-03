class MainPage{

    constructor(){
        this.page=this.page;
        
        //Recharge & Bills
        this.recharge= this.page.locator("//li[@class='_2Szju'  and contains(., 'Recharge & Bills')]");
        this.mobileRecharge= this.page.locator("//li[text()='Recharge & Bills']//preceding::a[text()='Mobile Recharge']");

        //Payments & Services
        this.paymsAndServ= page.locator("//li[@class='_2Szju' and contains(., 'Payments & Services')]");
        this.paymnt= this.page.locator("//li[text()='Payments & Services']//preceding::a[text()='Payments']");
        //bills paymnt and recharges
        this.Bpr= this.page.locator("//a[@href='https://paytm.com/recharge-bill-payment']");


    }

    //function to navigate
    async Goto(){
        await this.page.goto("https://paytm.com/");
    }
}