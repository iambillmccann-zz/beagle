PillSmart - Mobile App

## Description

The PillSmart mobile app works with the PillSmart dispenser to help families of adolescents manage their drug therapies. The main driver of the application is to provide independence to kids while still giving oversight to parents. The application uses two roles (patient and care giver) to manage the drugs. With the app, a parent can set a schedule for their child to take their medication and can later verify that the pill was dispensed. The child will shake the stigma of the orange bottle with a sleek device to hold her pills.

### High level architecture

The PillSmart solution is built on a common modern architecture. The solution is n-tier where the tiers include the dispenser, the mobile application, a RESTful API, and a database backend. The components are described here:

#### The dispenser

The dispenser is the primary PillSmart device and the flagship of the solution. The dispenser has minimal electronics but will connect to the mobile application using either WiFi or Bluetooth.

#### The PillSmart mobile application

The mobile application is software running on Android or iOS devices that is used to manage drug therapies. This repository contains the source code for this app. The mobile application communicates with the dispenser and with the RESTful API. The device does not permanently store data, so whenever it is connected to the app, the device will send its' event-stream data to the app. The app in-turn relays the event to the RESTful for storage on the database.

Parents will use the app to save a schedule for medication on the dispenser. Once drug and schedule information is entered, the parent will publish to the dispenser. Only a care-giver can change or publish the schedule, but either the patient or the care-giver can transfer data off the dispenser.

#### The RESTful API

The RESTful API is the business backend for the solution. The API is the pipeline for data moving between the mobile app and permanent database storage. It runs queries to retrieve schedules or cmopliance history. It also receives and tansforms incoming event and saves it to the database.

#### The database backend

The database beckend is permanent storage. There is no business logic or code inside the database other than rules to protect and secure the data and to run queries efficiently.

## Tech Stack

### Mobile App

- React
- React Native
- React Native Paper
- Google Fonts

### Development Environment

#### Prerquisites

- Docker Desktop version 3.0.4 or higher
- Node version 14.15 or higher
- NPM version 6.0 or higher
- __Recommended IDE__ VSCode


If the Poppins font is not recognized, then run the following command from the terminal ...
```
rm -rf ./node_modules/expo/node_modules/expo-font/
```
Resolved by using the advice in the artical at ... https://github.com/expo/google-fonts/issues/9

This font family contains 18 styles.

- Poppins_100Thin
- Poppins_100Thin_Italic
- Poppins_200ExtraLight
- Poppins_200ExtraLight_Italic
- Poppins_300Light
- Poppins_300Light_Italic
- Poppins_400Regular
- Poppins_400Regular_Italic
- Poppins_500Medium
- Poppins_500Medium_Italic
- Poppins_600SemiBold
- Poppins_600SemiBold_Italic
- Poppins_700Bold
- Poppins_700Bold_Italic
- Poppins_800ExtraBold
- Poppins_800ExtraBold_Italic
- Poppins_900Black
- Poppins_900Black_Italic

Information on using the Poppins font is available here ... https://github.com/expo/google-fonts/tree/master/font-packages/poppins#readme
