Feature: Password Empty Login

Scenario: Password input empty only
   Given The user is on the Saucedemo login page
    When The user enters empty password in the Password input
    Then The user should see a message about empty password