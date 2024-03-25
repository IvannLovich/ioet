Feature: Username Empty Login
 
 Scenario: Username input empty only
    Given The user is on the Saucedemo login page
    When The user writes nothing in the Username input
    Then The user should see a message about empty username