Feature: Main Page
  As a rentobox user
  In order to view what the app is about
  I want to land in the main page
 
  Scenario: Rentobox Owner Views Main Page
    Given I am a rentobox owner
    When I visit main page
    Then I should see "Calendar" link
    And I should see "Bookings" link
    And I should see "Services" Link 

