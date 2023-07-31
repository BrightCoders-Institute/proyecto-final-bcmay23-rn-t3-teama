![BrightCoders Logo](img/logo.png)

# 🍎 Foodie Care App 🍎

![Badge in progress](https://img.shields.io/badge/STATUS-IN%20PROGRESS-green)

* [Description of project](#description-of-project)
* [Functional Requirements](#functional-requirements)
* [Non-Functional requirements](#non-functional-requirements)
* [User Interface](#user-interface)
* [Database](#database)
* [How to Install and Run the Project](#how-to-install-and-run-the-project.)
* [Tools used](#tools-used)
* [Credits](#credits)
* [Badges](#badges)

## Description of project
The system will have two types of user profiles: patient and nutritionist.

The entire system is based on a mobile application for users and a web application for the nutritionist. Its main function is to monitor the nutritionist's plans and recommendations, so it will not have the capability to replace an in-person appointment with the nutritionist.

This project focuses on the patient interface.

Initially, the user will attend an in-person appointment with the nutritionist, who will be responsible for providing a username, password, and key to the patient so that they can access the application and track their progress based on their goals.

Within the application, the patient will be able to view the diet shared by the nutritionist, as well as other relevant information provided informatively or suggestively.

Each dish shown will provide information about its caloric content, as well as its corresponding recipe.

## Functional requirements

The application must cover the following functionalities:

- **LogIn**:
	1. Home screen with nutritionist logo.
	2. Registration with username, password, and key.
	3. Log in using the key provided by the nutritionist. It must have all validations using Firebase.
- **Main Screen**:
	1. Banner with various suggestions for dishes and/or exercises.
	2. Display of the day's caloric progress.
- **Scheduled Weekly Menu Screen**:
	1. It should be able to access the diet provided by the nutritionist.
	2. Weekly calendar to display the scheduled diet according to the day.
	3. The app should be able to show information about the caloric intake, etc. It should also display the recipe of the dish with 	appropriate portions. This information should be obtained from an API.
	4. The user can mark a dish as completed.
- **Caloric Report Screen**:
	1. Show progress bar according to the calories consumed in the day and based on goals set by the nutritionist.
	2. Additionally, detailed visualization of the consumed macros will be available.
	3. The weekly calendar should also be displayed on this screen.
- **Information about the Nutritionist and the Patient**:
	1. The application should display general information about the nutritionist.
	2. Users can schedule in-person appointments, and modals should be used to verify the status of the request.
	3. Show a card with user information (weight, height, target weight, user key, etc.).
	4. The user will have access to their scheduled but unattended appointments.
- **Messaging**:
	1. As an alternate means of direct communication, a messaging section should be considered, where the user can contact the nutritionist to address any doubts regarding their nutritional plan.

## Non-Functional requirements

The application must cover the following functionalities:

- **Database**:
	1. Store information in Firebase. From user and custom plans data to patient and nutritionist information, etc.
- **Quality**:
	1. Use prettier to fix code formatting
 	2. It should achieve an **A** grade in static code analysis tools like Codacy or equivalents. This implies maintaining clean, 		readable, and well-structured code.
	4. Include unit tests.
- **Execution**:
	1. It should be runnable for both Android and IOS platforms.
	2. Thorough testing on both systems must be conducted to ensure proper and smooth functionality.
- **Design**:
	1. The application's design, including forms, listings, and other visual elements, should follow provided guidelines and specifications, ensuring a professional and consistent appearance throughout the application.
- **State Management**:
	1. Use Hooks, Redux, Context API, or similar libraries to manage the application's state, allowing for a coherent and predictable data flow among different components.

## User Interface
﻿https://www.figma.com/proto/K14kpeiZxnN6yuNPEiIs9R/FoodieCare-App?type=design&node-id=77-206&t=yr665nguUMCnlNcD-0&scaling=scale-down&page-id=0%3A1 
 
## Database
[https://dbdiagram.io/d/64c177a502bd1c4a5ec11f5c](https://dbdiagram.io/d/64c177a502bd1c4a5ec11f5c) 
-   **userData:** id, userKey, name, age, image, weight, height, bmi, waist, hips, bust, fatPercentage, goal, caloriesPerDay
    
-   **nutritionistData:** id, name, image, major, cityAndCountry, officeAddress, yearsOfExperience, numOfPatients, biography
    
-   **nutritionCounselling:** id, user_id, location, date, time, price
    
-   **meal:** id, title, type, cookingTime, difficulty, ingredients (unit of measure, quantities, ingredient), instructions (step1,step2,...), nutritionalContribution (calories, protein, carbs, fat)
    
-   **recipeBook:** id, id_user, breakfast (meal_id, day), morningSnack (meal_id, day), lunch (meal_id, day), afternoonSnack (meal_id, day), dinner (meal_id, day), user_caloriesPerDay

## How to Install and Run the Project

The first and most important step is to clone the remote repository to run it locally.

```
git clone [repository URL]
```

Next, the next step will be to install dependencies and modules required by the project to run correctly.

```
npm install
```
To execute the main functionality of the program, you should run the following command in the terminal:

```
npx react-native run-android
```

or 

```
npx react-native run-ios
```

## ⚒️ Tools used
- TypeSccript
- React Native
- Firebase
- ESLint 
- Jest 
- Codacy

## Credits

| [<img src="https://avatars.githubusercontent.com/u/116055107?v=4" width=115><br><sub>Montserrat Aguilar Valle</sub>](https://github.com/montsegv-2) | [<img src="https://avatars.githubusercontent.com/u/47892591?v=4" width=115><br><sub>Alberto García Martínez</sub>](https://github.com/AlbertoG22) | [<img src="https://avatars.githubusercontent.com/u/44180680?v=4" width=115><br><sub>Orlando Landillo</sub>](https://github.com/landillo) | [<img src="https://avatars.githubusercontent.com/u/112898464?v=4" width=115><br><sub>Miguel Cobián</sub>](https://github.com/mcmmiguel)
| :---: | :---: | :---: | :---: |

## Badges

| Analizador | Calificación|
| ----- | ---- |
| Codacy | not yet |
