Feature: How It works page
  As a Visitor
  I want to understand how rentobox works

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:a1560ae6a
  Scenario: view how it works page
    Given I am a visitor
    When I visit how it works page
    Then I should see step 1 page 
    And I should see pictures about step 1
    And I should see an explanation about step 1

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:a6f871e0b
  Scenario: Scroll down to step
  	Given I am a visitor
  	And I'm on step 1
    When I scroll down
    Then I should see step 2 page
    And I should see pictures about step 2
    And I should see an explanation about step 2

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:aeec8aa4c
 Scenario: Scroll up to step
    Given I am a visitor
    And I'm on step 4
    When I scroll up
    Then I should see step 3 page
    And I should see pictures about step 3
    And I should see an explanation about step 3

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:a703722e9
  Scenario: Scroll down to last step
    Given I am a visitor
    And I'm on step 1 page
    When I scroll down to bottom
    Then I should see step 4 page
    And I should see pictures about step 4
    And I should see an explanation about step 4 



 