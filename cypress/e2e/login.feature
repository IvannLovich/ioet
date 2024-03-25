Feature: Login

  Scenario: User log in to the inventory items page	
    Given The user is on the Saucedemo login page
    When The user enters username in the Username input
    Then The user writes the password in the Password input
    Then The user is successfully logged
    
