Feature: Invalid Username and Password Login

  Scenario: Invalid username and password
    Given The user is on the Saucedemo login page
    When The user types invalid username "invalid_user"
    And The user writes invalid pass "invalid_password"
    Then The user submits the login form