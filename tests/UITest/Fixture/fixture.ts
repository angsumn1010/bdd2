import {test as base} from 'playwright-bdd'
import * as Pages from '../Pages/index';
type MyFixtures = {
    login: Pages.LoginPage;
}

export const test = base.extend<MyFixtures>({
    login: async ({page}, use) => {
        const login = new Pages.LoginPage(page);
        await use(login);
    }
})