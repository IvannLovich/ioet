Feature: Empty Credentials Login

 Scenario: Username and password inputs empty
    Given The user is on the Saucedemo login page
    When The user enters empty username in the Username input
    And The user writes empty password in the Password input
    Then The user should see a message about empty username and password