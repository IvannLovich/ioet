Feature: Invalid Password Login

  Scenario: Valid username, password invalid
    Given The user is on the Saucedemo login page
    When The user enters valid username "standard_user"
    And The user writes invalid password "invalid_password"
    Then The user submits the login button