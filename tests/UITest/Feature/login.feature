Feature: Verify Login Functionality
    Feature description: This feature tests the login functionality of the application to ensure that users can log in successfully with valid credentials and receive appropriate error messages with invalid credentials.
  Background: Navigate to the login page
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"

  Scenario: Verify that user is able to log in with valid credentials
    
    And I click on the " My account" link
    And I enter email Address as "testuser101@example.com"
    And I enter password as "TestPassword123"
    When I click on the submit button
    Then I should verify url contains "route=account/account"

  Scenario: Verify that user is not able to log in with invalid credentials
    And I click on the " My account" link
    And I enter email Address as "<email_address>"
    And I enter password as "<password>"
    When I click on the submit button
    Then I should should not ba able to login and the URL will contain "route=account/login"
    Examples:
        | email_address              | password          |
        |aaa@123.com              | TestPassword123   |
        |bbb@444.com          | WrongPassword     |
        |ccc@333.com          | 12345678          |