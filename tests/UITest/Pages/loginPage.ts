import {Locator,Page} from "@playwright/test";

export class LoginPage{
    protected page: Page;
    readonly my_acct_btn: Locator;
    readonly email_input: Locator;
    readonly password_input: Locator;
    readonly login_btn: Locator;   

    constructor(page: Page){
        this.page = page;
        this.my_acct_btn = page.getByRole('button', { name: 'My Account' });
        this.email_input = page.getByPlaceholder('E-Mail Address');
        this.password_input = page.getByPlaceholder('Password');
        this.login_btn = page.locator('input[value="Login"]');
    }

    async navigateToLoginPage(url: string){
        await this.page.goto(url);
    }

    async clickMyAccount(){
        await this.my_acct_btn.click();
    }
    async enterEmail(email: string){
        await this.email_input.fill(email);
    }
    async enterPassword(password: string){
        await this.password_input.fill(password);
    }
    async clickLogin(){
        await this.login_btn.click();
    }
}