Feature: About Page
  As a Visitor
  I want to know about who built rentobox

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:ada2797b8
  Scenario: view about page
    Given I am a visitor
    When I visit about page
    Then I should see information about the company
 