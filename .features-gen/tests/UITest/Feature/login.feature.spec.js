// Generated from: tests\UITest\Feature\login.feature
import { test } from "../../../../tests/UITest/Fixture/fixture.ts";

test.describe('Verify Login Functionality', () => {

  test.beforeEach('Background: Navigate to the login page', async ({ Given, login }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { login }); 
  });
  
  test('Verify that user is able to log in with valid credentials', async ({ When, Then, And, login, page }) => { 
    await And('I click on the " My account" link', null, { login }); 
    await And('I enter email Address as "testuser101@example.com"', null, { login }); 
    await And('I enter password as "TestPassword123"', null, { login }); 
    await When('I click on the submit button', null, { login }); 
    await Then('I should verify url contains "route=account/account"', null, { page }); 
  });

  test.describe('Verify that user is not able to log in with invalid credentials', () => {

    test('Example #1', async ({ When, Then, And, login, page }) => { 
      await And('I click on the " My account" link', null, { login }); 
      await And('I enter email Address as "aaa@123.com"', null, { login }); 
      await And('I enter password as "TestPassword123"', null, { login }); 
      await When('I click on the submit button', null, { login }); 
      await Then('I should should not ba able to login and the URL will contain "route=account/login"', null, { page }); 
    });

    test('Example #2', async ({ When, Then, And, login, page }) => { 
      await And('I click on the " My account" link', null, { login }); 
      await And('I enter email Address as "bbb@444.com"', null, { login }); 
      await And('I enter password as "WrongPassword"', null, { login }); 
      await When('I click on the submit button', null, { login }); 
      await Then('I should should not ba able to login and the URL will contain "route=account/login"', null, { page }); 
    });

    test('Example #3', async ({ When, Then, And, login, page }) => { 
      await And('I click on the " My account" link', null, { login }); 
      await And('I enter email Address as "ccc@333.com"', null, { login }); 
      await And('I enter password as "12345678"', null, { login }); 
      await When('I click on the submit button', null, { login }); 
      await Then('I should should not ba able to login and the URL will contain "route=account/login"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UITest\\Feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I click on the \" My account\" link","stepMatchArguments":[{"group":{"start":15,"value":"\" My account\"","children":[{"start":16,"value":" My account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I enter email Address as \"testuser101@example.com\"","stepMatchArguments":[{"group":{"start":25,"value":"\"testuser101@example.com\"","children":[{"start":26,"value":"testuser101@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I enter password as \"TestPassword123\"","stepMatchArguments":[{"group":{"start":20,"value":"\"TestPassword123\"","children":[{"start":21,"value":"TestPassword123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I click on the submit button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should verify url contains \"route=account/account\"","stepMatchArguments":[{"group":{"start":29,"value":"\"route=account/account\"","children":[{"start":30,"value":"route=account/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I click on the \" My account\" link","stepMatchArguments":[{"group":{"start":15,"value":"\" My account\"","children":[{"start":16,"value":" My account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter email Address as \"aaa@123.com\"","stepMatchArguments":[{"group":{"start":25,"value":"\"aaa@123.com\"","children":[{"start":26,"value":"aaa@123.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter password as \"TestPassword123\"","stepMatchArguments":[{"group":{"start":20,"value":"\"TestPassword123\"","children":[{"start":21,"value":"TestPassword123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on the submit button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should should not ba able to login and the URL will contain \"route=account/login\"","stepMatchArguments":[{"group":{"start":62,"value":"\"route=account/login\"","children":[{"start":63,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I click on the \" My account\" link","stepMatchArguments":[{"group":{"start":15,"value":"\" My account\"","children":[{"start":16,"value":" My account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter email Address as \"bbb@444.com\"","stepMatchArguments":[{"group":{"start":25,"value":"\"bbb@444.com\"","children":[{"start":26,"value":"bbb@444.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter password as \"WrongPassword\"","stepMatchArguments":[{"group":{"start":20,"value":"\"WrongPassword\"","children":[{"start":21,"value":"WrongPassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on the submit button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should should not ba able to login and the URL will contain \"route=account/login\"","stepMatchArguments":[{"group":{"start":62,"value":"\"route=account/login\"","children":[{"start":63,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I click on the \" My account\" link","stepMatchArguments":[{"group":{"start":15,"value":"\" My account\"","children":[{"start":16,"value":" My account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter email Address as \"ccc@333.com\"","stepMatchArguments":[{"group":{"start":25,"value":"\"ccc@333.com\"","children":[{"start":26,"value":"ccc@333.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter password as \"12345678\"","stepMatchArguments":[{"group":{"start":20,"value":"\"12345678\"","children":[{"start":21,"value":"12345678","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on the submit button","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should should not ba able to login and the URL will contain \"route=account/login\"","stepMatchArguments":[{"group":{"start":62,"value":"\"route=account/login\"","children":[{"start":63,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end