# First Project for Compass UOL - Internship Program 😎

## About
This First Project is basically an API creation for a planner application. The repository focus on backend development using the knowledges learned on internship program by Compass.

## Status -> In development 😃
### 0% [======>XXX] 100%

## Tecnologies used/to be used (possibly 😐)
- [X] Javascript
- [X] Node.js + Express
- [X] Typescript
- [ ] Docker
- [X] Eslint
- [ ] Testing (chai/moch, jest/superjest)
- [ ] Swagger
- [X] MongoDB

## To Be Done/Requirements
- [X] Readability
- [X] Private repository
- [X] Small commits
- [X] Commit pattern
- [X] Express
- [X] Readme
- [X] Explanation of how to run locally
- [X] Deploy the application
- [X] Share the (repository link) with Compass Team by E-Mail
- [X] **Implement Get Routes**
- [X] **Implement Post Routes**
- [X] **Implement Delete Routes**
- [X] **Implement Patch/Update Routes (Optional)**


## How to reply this project

### Install LTS node version on website: https://nodejs.org/en/download/

### Setting database enviroment
- #### (Docker + MongoDB - Offline enviroment)
1. (Not done yet)

- #### (Atlas + MongoDB - Online enviroment)
1. LogIn or SignUp on https://www.mongodb.com/atlas
2. Create a new project as cluster
3. Connect to the cluster -> `Connect your application`
4. Copy the connection string
5. Rename `.env.example` file just to `.env`
6. Change `<Password>` field (on the connection string) to your cluster password created on atlas

### To install necessary dependencies: ```npm install```
- After all the configuration, to build the application, write on terminal: ```npm run build```
- And to start the application after building Typescript to Javascript, run: ```npm run start```
- If you want just to run the application locally without creating the dist folder (with builded Javascript), just run on terminal: ```npm run dev```


## Considerations

### `/` route
- Just a route to dont cause a **severe** things on AWS Elastic Beanstalk (in my case because i put on a server)

### `/api/v1/users` route
- On /SignIn, its necessary to put just the email and the password in json, more or less than this, a error will be thrown
- On /SignUp, all the fields need to be put, otherwise a error will be thrown

### `/api/v1/events` route
- On `/`, you can getAllEvents, create a new events, and getEvents by weekday, that means that if you set `/dayOfTheWeek=0` on query parameter (0 means sunday -> 6 means saturday), all the events that has a dateTime on sunday will be get (response for client).
- On `/id`, you can do CRUD operations with the event id, like updateById, deleteById, getById
- Both `/` and `/id` are with validation, meaning that if you dont pass a property or put on wrong format, an error will be thrown

### Well, thats is 😅, link of the application on a AWS server here: 
- http://firstprojectcompassuol-env.eba-epngbm5y.sa-east-1.elasticbeanstalk.com/ 
