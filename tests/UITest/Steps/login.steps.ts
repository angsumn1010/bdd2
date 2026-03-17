import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import {test} from "../Fixture/fixture";


const { Given, When, Then } = createBdd(test);

Given('I navigate to {string}', async ({login}, arg) => {
  await login.navigateToLoginPage(arg);
});

Given('I click on the {string} link', async ({login}, arg) => {
  await login.clickMyAccount();
});

Given('I enter email Address as {string}', async ({login}, arg) => {
    await login.enterEmail(arg);
});

Given('I enter password as {string}', async ({login}, arg) => {
    await login.enterPassword(arg);
});

When('I click on the submit button', async ({login}) => {
  await login.clickLogin();
});

Then('I should verify url contains {string}', async ({page}, arg) => {
  await expect(page).toHaveURL(new RegExp(arg));
});

Then('I should should not ba able to login and the URL will contain {string}', async ({page}, arg: string) => {
  await expect(page).toHaveURL(new RegExp(arg));
});