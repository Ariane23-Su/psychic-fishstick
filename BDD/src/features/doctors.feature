@test
Feature: Doctors

@doctors1
Scenario Outline: It should be possible to add a new doctor
    When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    Then modal window should be displayed

    When I enter "<Name>" in the "Name" field
    And I enter "<Phone>" in the "Phone" field
    And I enter "<Email>" in the "Email" field
    And I enter "<Education>" in the "Education" field
    And I click "save" button on modal window
    Then modal window should not be displayed
    And the specialist card Doctor_8 on the "Doctors" page should have the text containing "<Text>"

Examples: 
| Name         | Phone          | Email        | Education          | Text         |
| Joe Black    | (412)-345-4657 | jb@gmail.com | Graduate school    | Joe Black    |
| Albert Camus | (412)-987-6543 | ac@gmail.com | Medical University | Albert Camus |

