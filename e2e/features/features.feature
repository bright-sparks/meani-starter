Feature: Features Page
  As Visitor
  I want to understand what rentobox is and why it's done

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:a03e8f0d1
  Scenario: Features page
    Given I am a visitor
    When I visit features page
    Then I should see the rentobox logo
    And I should see what rentobox is
    And I should see why we do rentobox
    And I should see the exterior view
    And I should see the interior view link
    And I should see the app view link 
    And I should see its price
    And I should see frequently asked questions 
    And I should see login link

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:a03e8f0d1
  Scenario: Exterior view
  	Given I am a visitor
  	When I click exterior features link
  	Then I should see the exterior of the house
  	And I should see the design feature
  	And I should see the construction feature
  	And I should see the panels feature 
  	And I should see the wheels feature
  	And I should see the door lock feature 
  	And I should see the solar panels feature
  	And I should see the rainwater harvesting feature

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:a98e1732c
  Scenario: Interior view 
  	Given I am a visitor
  	When I click interior features box
  	Then I should see the interior of the house
  	And I should see the design feature
  	And I should see the space feature
  	And I should see the comfort feature
  	And I should see the durability feature
  	And I should see the technology feature

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:a1cbc1bb0
  Scenario: App view
  	Given I am a visitor
  	When I click app features box
  	Then I should see the booking feature
  	And I should see the management feature
  	And I should see the data analysis feature
  	And I should see the keyless access feature

  #mockup https://moqups.com/canercak@gmail.com/HgVuGKEq/p:aa714f70a
  Scenario: Feature panel
  	Given I am a visitor
  	When I click on a feature
  	Then I should see a whole page feature panel
  	And I shoud see the pictures of the feature
  	And I should see the explanation of the feature
    And I should be able to click on next picture
    And I should be able to click on previous picture
    And I should be able to close the panel
 



 