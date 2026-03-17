import {test as base} from 'playwright-bdd'
import {LoginPage} from '../Pages/loginPage';

type MyFixtures = {
    login: LoginPage;
}

export const test = base.extend<MyFixtures>({
    login: async ({page}, use) => {
        const login = new LoginPage(page);
        await use(login);
    }
})