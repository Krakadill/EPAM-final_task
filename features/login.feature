Feature: The Login Functionality

  Scenario: Login in with empty credentials
    Given I am on the login page
    When I login with empty credentials
    Then I should see an username error message to equal "Epic sadface: Username is required"

  Scenario: Login in with only username
    Given I am on the login page
    When I login with only username
    Then I should see a password error message to equal "Epic sadface: Password is required"

  Scenario: Login in with correct username and password
    Given I am on the login page
    When I login with correct username and password
    Then I should see page Title "Swag Labs"

  Scenario: Login in with wrong username
    Given I am on the login page
    When I login with wrong username
    Then I should see incorrect Username and Password error message to equal "Epic sadface: Username and password do not match any user in this service"
  Scenario: Login in with wrong password
    Given I am on the login page
    When I login with wrong password
    Then I should see incorrect Username and Password error message to equal "Epic sadface: Username and password do not match any user in this service"