Feature: The main page welcomes the user

    Scenario: The user is welcomed, when opening the main page
        Given I navigate to the main page
        When I stick around for 100 ms
        Then I see a welcome message