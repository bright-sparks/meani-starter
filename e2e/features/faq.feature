Feature: Faq page
  As a Visitor
  I want to check frequently asked questions about rentobox 

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:ada2797b8
  Scenario: view faq page
    Given I am a visitor
    When I visit faq page
    Then I should see the frequently asked questions

  Scenario: view faq quetion answer
    Given I am a visitor
    When I click a faq question
    Then I should see its answer



 