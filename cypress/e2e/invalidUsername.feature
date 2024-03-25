Feature: Invalid Username Login

Scenario: Invalid username, password correct
    Given The user is on the Saucedemo login page
    When The user enters invalid username "invalid_user"
    And The user writes valid password "secret_sauce"
    Then The user submits form login