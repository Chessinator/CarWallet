# User Stories

## Personas

Stephie, I have one car

Karl, I have a large collection of vehicles (cars, motorcycles and a truck)

## Accepted User Stories

### general
As Karl
When I try to access user specific content
I want to be redirected to login

    GIVEN I am not logged in
    WHEN  I try to access a page that is not login, the front page or about
    THEN  I am redirected to the login

### User Story 1
As Stephie
I want to be able to see my car listed in the carwallet.

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  2  |  2  |  2  |  2  |  2  | 11  |
|   2   |  1  |  2  |  2  |  1  |  1  |  2  |  9  |
|   3   |  2  |  2  |  2  |  2  |  2  |  2  | 12  |

    GIVEN I am not logged in
    WHEN  I want to see my vehicle list
    THEN  I am redirected to login

    GIVEN I am logged in
    AND   I do not have any vehicles
    WHEN  I want to see my vehicle list
    THEN  I see an empty list

    GIVEN I am logged in
    AND   I have a non-empty list of vehicles
    WHEN  I want to see my vehicle list
    THEN  I see my list of vehicles

    GIVEN I am logged in
    AND   I have a non-empty list of vehicles
    AND   the API is responding slowly
    WHEN  I view my vehicle list
    THEN  I see placeholders that get filled out once the data is loaded

### User Story 2
As Stephie
I want to see the car details of my car in the same screen, as my choosen car, so i have an overview about car informations in on screen.

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  1  |  2  |  1  |  2  |  8  |
|   2   |  1  |  1  |  2  |  2  |  1  |  2  |  9  |
|   3   |  1  |  2  |  1  |  2  |  2  |  2  | 10  |

    GIVEN I am logged in
    AND   I got a non-empty list of vehicles
    WHEN  I viewing my vehicle tab
    THEN  I see both my list of vehicles as well as the selected vehicle details

    GIVEN I am logged in
    AND   I got a non-empty list of vehicles
    AND   the API is responding slowly
    WHEN  I viewing my vehicle tab
    THEN  I see placeholder for each loading element


### User Story 3
As Stephie
I want to add all my receipes from completed services.

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  0  |  1  |  1  |  1  |  0  |  1  |  4  |
|   2   |  1  |  1  |  2  |  1  |  1  |  1  |  7  |
|   3   |  0  |  1  |  2  |  1  |  1  |  1  |  6  |

    GIVEN I have service receipes from outside this application
    WHEN  I am inside my vehicles details
    THEN  I can add my receipe (file) with price and date

### User Story 5
As Karl
I want to remove cars when I sold this

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  2  |  2  |  2  |  2  | 10  |
|   2   |  1  |  1  |  2  |  2  |  2  |  2  | 10  |
|   3   |  1  |  2  |  2  |  2  |  2  |  2  | 11  |

    GIVEN I have selected a vehicle from my non-empty list
    WHEN  I click on delete
    THEN  I am confronted with a "confirmation check" whether or not I actually want to remove

    GIVEN I have selected a vehicle from my non-empty list
    AND   I clicked on delete
    AND   I have gotten a "confirmation check"
    WHEN  I confirm
    THEN  the vehicle is removed

### User Story 8
As Stephie
I want to see a front page explaining the product
When I visit the page without a login

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  2  |  2  |  1  |  2  |  2  |  2  | 11  |
|   2   |  1  |  1  |  1  |  1  |  2  |  2  |  8  |
|   3   |  1  |  2  |  1  |  1  |  1  |  1  |  7  |

    GIVEN I am not logged in
    WHEN  I visit the website (front page / root)
    THEN  I see a product description of this website

### User Story 9
As Stephie
I want to be able to register with my email adress and password

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  2  |  1  |  0  |  2  |  7  |
|   2   |  2  |  1  |  2  |  1  |  0  |  2  |  8  |
|   3   |  2  |  1  |  2  |  1  |  0  |  1  |  7  |

    GIVEN I visit the CarWallet application
    WHEN  I click on sign up
    THEN  it should open a registration form

    GIVEN I incorrectly filled the form
    WHEN  I click on submit
    THEN  the app should provide details about the wrong/insufficient inputs

    GIVEN I correctly filled the form
    WHEN  I click on submit
    THEN  the app should create an user account

    GIVEN I successfully created a User
    WHEN  I click on submit
    THEN  I should be redirected to the login page

    GIVEN I filled the form
    WHEN  I click on submit
    THEN  I should get a message if the registration was successfull or not

### User Story 10
As Karl
I want to be able to login from the front page

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  2  |  2  |  1  |  1  |  2  |  9  |
|   2   |  1  |  2  |  2  |  1  |  1  |  2  |  9  |
|   3   |  1  |  2  |  2  |  1  |  1  |  1  |  8  |

    GIVEN I am not logged in
    WHEN  I browse to the CarWallet applications front page
    THEN  I should see a form to login

    GIVEN I enter wrong/invalid credentials into the login form
    WHEN  I try to login
    THEN  I should get an error message

    GIVEN I enter correct credentials into the login form
    WHEN  I try to login
    THEN  I should be logged in

    GIVEN I am not logged in
    WHEN  I log in
    THEN I am redirected to the front page

### User Story 11
As Stephie
I want to be able to add my vehicle to the program
When I am inside my vehicle storage

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  2  |  1  |  2  |  2  |  9  |
|   2   |  1  |  1  |  2  |  1  |  1  |  2  |  8  |
|   3   |  1  |  2  |  2  |  1  |  1  |  2  |  9  |

    GIVEN I view the vehicle storage
    WHEN  I see the vehicle list
    THEN  I want to have an option to add a vehicle

### User Story 14
As Karl
I want to see all my vehicles
When I go to the vehicle selection

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  2  |  2  |  1  |  2  |  2  | 10  |
|   2   |  1  |  1  |  2  |  1  |  1  |  2  |  8  |
|   3   |  1  |  2  |  2  |  2  |  2  |  2  | 11  |

    GIVEN I am logged in
    AND I already have some vehicles added
    WHEN I see the homepage
    THEN I should see a list of my vehicles

### User Story 15
As Karl
I want to be able to add and remove vehicles
When I am at the vehicle selection

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  2  |  1  |  2  |  2  |  9  |
|   2   |  1  |  1  |  2  |  1  |  1  |  2  |  8  |
|   3   |  1  |  2  |  2  |  2  |  2  |  2  | 11  |

    GIVEN I view the vehicle storage
    WHEN  I see the vehicle list
    THEN  I have an option to remove vehicles

    GIVEN I have vehicles in my list
    WHEN  I click on delete for that vehicle
    THEN  it is removed from my list

### User Story 16
As Stephie
I want to modify details of my car
When I selected it

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  2  |  1  |  0  |  2  |  7  |
|   2   |  0  |  1  |  2  |  1  |  1  |  2  |  7  |
|   3   |  1  |  2  |  2  |  2  |  2  |  2  | 11  |

    GIVEN I am in the vehicle storage
    WHEN  I click on a vehicle
    THEN  I see a list of all vehicle details

    GIVEN I see a list of all vehicle details for a selected vehicle
    WHEN  I click on one of these properties
    THEN  I can modify them

### User Story 17
As Karl
I want to see important notifications for my vehicles right at the selection
When I view the vehicle selection
so that I know which to focus on first

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  0  |  1  |  2  |  1  |  0  |  2  |  6  |
|   2   | -1  |  1  |  2  |  1  |  0  |  2  |  5  |
|   3   | -1  |  2  |  1  |  1  |  1  |  2  |  6  |

    GIVEN I am viewing the vehicle list
    WHEN  I view a vehicles preview for selection
    THEN  I shall see the most important information (i.e. pending inspection, insurance etc) about a vehicle

### User Story 18
As Stephie
I want to be able to change my personal details in case I relocate etc

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  2  |  1  |  1  |  2  |  8  |
|   2   |  1  |  1  |  2  |  1  |  2  |  2  |  9  |
|   3   |  2  |  2  |  2  |  2  |  2  |  2  | 12  |

    GIVEN my personal informations have changed
    WHEN  I submit my changes
    THEN  I shall see the new in formations within my user profile

### User Story 19
As Karl
I want to be able to add pictures of my vehicles so that I can easily keep track of their statuses, damages, values etc

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  0  |  1  |  1  |  1  |  0  |  2  |  5  |
|   2   |  0  |  1  |  1  |  1  |  1  |  2  |  6  |
|   3   |  1  |  1  |  1  |  0  |  1  |  2  |  6  |

    GIVEN I see a list of all vehicle details for a selecred vehicle
    WHEN  I click to add a picture
    THEN  I can upload a picture meeting the picture requirements

    GIVEN I uploaded a picture to a vehicle
    WHEN  I view the vehicles details
    THEN  I can see the picture

### User Story 20
As Karl
I want to add notes to my vehicles

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  2  |  1  |  1  |  0  |  2  |  7  |
|   2   |  0  |  1  |  1  |  2  |  2  |  2  |  8  |
|   3   |  2  |  2  |  1  |  2  |  2  |  2  | 11  |

    GIVEN I have a non-empty list of vehicles
    WHEN  I view the details of a vehicle
    THEN  I can add and modify "notes" to that vehicle

### User Story 21
As Stephie
I want to see when my next inspection is due

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  0  |  1  |  2  |  1  |  1  |  2  |  7  |
|   2   |  0  |  1  |  2  |  2  |  2  |  2  |  9  |
|   3   | -1  |  2  |  2  |  1  |  2  |  2  |  8  |

    GIVEN my selected vehicle has due inspections
    WHEN  I view that vehicles details
    THEN  I see the due date and remaining time for that inspection

### User Story 22
As Stephie
I want to get a reminder of my next inspection so that I dont have to check frequently

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  2  |  0  |  0  |  2  |  6  |
|   2   | -1  |  1  |  2  |  0  |  0  |  1  |  2  |
|   3   | -1  |  2  |  2  |  0  |  1  |  1  |  5  |

    GIVEN I have cars with due inspections
    WHEN  the due inspection is close
    THEN  I get a notification (email?)

### User Story 23
As Stephie
I want to be able to find a list of all services offered for my car

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  2  |  1  |  0  |  2  |  7  |
|   2   |  0  |  1  |  2  |  1  |  0  |  1  |  5  |
|   3   |  1  |  2  |  2  |  1  |  1  |  2  |  9  |

    GIVEN I selected a valid vehicle
    WHEN  I view a vehicles details
    THEN  I see a list of all services offered for that vehicle

## Backlog User Stories

### User Story 4
As Karl I want to add all my bonus programm card to wallet (no function, like a screenshot)

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  0  |  -1 |  1  |  1  |  2  |  4  |
|   2   |  2  |  1  |  0  |  1  |  1  |  2  |  7  |
|   3   |  0  | -1  |  1  |  0  |  1  |  0  |  1  |

Backlog, becomes more relevant as mobile app

### User Story 6   
As Stephie I want to see the summary of expenses per car

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  0  |  1  |  0  |  0  |  1  |  3  |
|   2   | -1  |  1  |  1  |  0  |  1  |  2  |  4  |
|   3   | -1  |  1  |  1  |  0  |  1  |  1  |  3  |

backlog

### User Story 11
As Karl
I want to see an overview of news and vehicle statuses
When I visit the front page

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  0  |  1  |  0  |  1  |  4  |
|   2   |  0  |  2  |  0  |  0  |  0  |  1  |  3  |
|   3   |  0  |  2  |  1  |  0  |  0  |  1  |  4  |

Backlog for when the infrastructure is done

### User Story 23
As Karl
I want to be able to search for services and see how many of my vehicles I can send there so that I dont have to go to too many different places

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   | -2  |  1  |  0  |  1  |  0  |  1  |  1  |
|   2   | -1  |  0  |  2  |  1  |  0  |  0  |  2  |
|   3   | -1  |  2  |  1  |  0  |  0  |  1  |  3  |

potential backlog

## REJECTED User Stories

### User Story 7
As Karl
I want to have a rough overview of functions describing the product
before I log in
so that I know this app is worth my time

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  2  |  2  |  1  |  2  |  2  |  2  | 11  |
|   2   |  1  |  1  |  0  |  1  |  1  | -1  |  3  |
|   3   |  1  |  2  |  1  |  1  |  1  |  1  |  7  |

Rejected because it is redundant with user story 6

### User Story 12
As Stephie
I want to see my car
When I go to the vehicle selection

| User# |  I  |  N  |  V  |  E  |  S  |  T  | SUM |
|:------|:----|:----|:----|:----|:----|:----|----:|
|   1   |  1  |  1  |  1  |  2  |  2  |  2  |  9  |
|   2   |  1  |  1  |  2  |  1  |  1  |  2  |  8  |
|   3   |  1  |  2  |  2  |  2  |  2  |  2  | 11  |

Rejected as it is redundant with User Story 1
