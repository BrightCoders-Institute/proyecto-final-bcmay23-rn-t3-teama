[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/mjKGLkyr)
![BrightCoders Logo](img/logo.png)

# Foodie Care App
* [Descripción](#descripción)
* [Requerimientos Funcionales](#requerimientos-funcionales)
* [Requerimientos No Funcionales](#requerimientos-no-funcionales)
* [Interfaz de usuario](#interfaz-de-usuario)
* [Base de datos](#base-de-datos)
* [Créditos](#créditos)
* [Badges](#badges)

## Descripción
El sistema contara con dos tipos de perfiles de usuarios (paciente y nutriólogo).

El sistema completo se basa en una app móvil para los usuarios y una app web para el nutriólogo. Su función principal es dar seguimiento a los planes y recomendaciones del nutriólogo, por lo que no tendrá la capacidad de suplir una cita presencial con este último.

Este proyecto se enfoca en la interfaz dirigida al paciente.

Basándose en que el usuario acudirá primero a una cita presencial con el nutriólogo, será este mismo quien se encargue de proporcionar un usuario, contraseña y clave al paciente para poder acceder a la aplicación y ver su avance conforme a sus objetivos.

El paciente será capaz de ver la dieta compartida por el nutriólogo dentro de la app, entre demás información que se dará de manera informativa o sugerente.

Cada platillo que se muestre podrá mostrar información acerca de su aporte calórico, así como la receta del mismo.

## Requerimientos funcionales
La aplicación deberá cubrir las siguientes funcionalidades:
- **Inicio de sesión**:
	1. Pantalla de home con logo del nutriólogo.
	2. Registro con usuario, contraseña y clave.
	3. Hacer Log In con la clave proporcionada por el nutriologo. Debe contar con todas las validaciones haciendo uso de Firebase.
- **Pantalla principal**:
	1. Banner con sugerencias variadas de platillos y/o ejercicios.
	2. Visualización del progreso calórico del día.
- **Pantalla de menú semanal programado**:
	1. Debe poder acceder a la dieta que el nutriologo proporcione.
	2. Calendario semanal para desplegar la dieta programada de acuerdo con el día.
	3. La app debe ser capaz de mostrar información sobre el aporte calórico, etc. Así como también deberá mostrar la receta del platillo con las porciones adecuadas. Dicha información deberá obtenerse de una API.
	4. El usuario podrá marcar como completado un platillo.
- **Pantalla de reporte calórico**:
	1. Mostrar barra de progreso de acuerdo con las calorías consumidas en el día y con base en metas puestas por el nutriólogo.
	2. Además también se podrá visualizar el tipo de macros consumidas de manera detallada.
	3. En esta pantalla también debe visualizarse el calendario semanal.
- **Información acerca del nutriólogo y el paciente**:
	1. La aplicación deberá mostrar información general acerca del nutriologo.
	2. Se podrán agendar citas presenciales y se deberá emplear el uso de modales para verificar el estado de la solicitud.
	3. Mostrar tarjeta con información de usuario (peso, altura, peso objetivo, clave de usuario, etc.)
	4. El usuario tendrá acceso a su citas programadas que no hayan sido atendidas.
- **Mensajería**:
	1. Como una vía alterna de comunicación directa, se debe considerar implementar un apartado de mensajería, donde el usuario podrá contactar al nutriologo para atender cualquier tipo de duda acerca de su plan nutricional.

## Requerimientos no funcionales
La aplicación deberá cubrir las siguientes funcionalidades:
- **Base de datos**:
	1. Guardar información en Firebase. Desde los usuarios y planes personalizados, hasta la información del paciente y nutriólogo, etc.
- **Calidad**:
	1. Utilizar prettier para corregir formato de código
	2. Se debe alcanzar una puntuación **A** en herramientas de análisis de código estático como Codacy o equivalentes. Esto implica mantener un código limpio, legible y bien estructurado.
	3. Incluir pruebas unitarias.
- **Ejecución**:
	1. Puede ejecutarse tanto como para Android o IOS.
	2. Se deben realizar pruebas exhaustivas en ambos sistemas para garantizar un funcionamiento correcto y sin problemas.
- **Diseño**:
	1. El diseño de la aplicación, incluyendo los formularios, listados y otros elementos visuales, debe seguir las pautas y especificaciones proporcionadas, asegurando una apariencia profesional y coherente en toda la aplicación.
- **Manejo del estado**:
	1. Utilizar Hooks, Redux, Context API u otra biblioteca similar para gestionar el estado de la aplicación, permitiendo un flujo de datos coherente y predecible entre los diferentes componentes.

## Interfaz de usuario
﻿https://www.figma.com/proto/K14kpeiZxnN6yuNPEiIs9R/FoodieCare-App?type=design&node-id=77-206&t=yr665nguUMCnlNcD-0&scaling=scale-down&page-id=0%3A1 
## Base de datos
[https://dbdiagram.io/d/64c177a502bd1c4a5ec11f5c](https://dbdiagram.io/d/64c177a502bd1c4a5ec11f5c) 
-   **userData:** id, userKey, name, age, image, weight, height, bmi, waist, hips, bust, fatPercentage, goal, caloriesPerDay
    
-   **nutritionistData:** id, name, image, major, cityAndCountry, officeAddress, yearsOfExperience, numOfPatients, biography
    
-   **nutritionCounselling:** id, user_id, location, date, time, price
    
-   **meal:** id, title, type, cookingTime, difficulty, ingredients (unit of measure, quantities, ingredient), instructions (step1,step2,...), nutritionalContribution (calories, protein, carbs, fat)
    
-   **recipeBook:** id, id_user, breakfast (meal_id, day), morningSnack (meal_id, day), lunch (meal_id, day), afternoonSnack (meal_id, day), dinner (meal_id, day), user_caloriesPerDay

## Créditos

## Badges
