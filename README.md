# Ride Along

Ride Along is a web app that allows users to find and post trips that other users can join. Users have the ability to review their past drivers, and chat with other people interested in the trip. We have a unique search feature -- users don’t need to match exactly on beginning and end points. They will be matched if their beginning and end points lie within existing available routes. This is particularily useful for users in small towns because they typically have less options, and with our app they can be matched with rides that pass through their area.

[Lighthouse Labs Demo Day Winner](https://twitter.com/lighthouse_labs/status/936397230214385664)


Frontend - React, React Router, Styled Components, Google Maps API

Backend - Node.JS, Express, Socket.io, Postgres, Sequelize, Axios
!["Front"](https://github.com/KaiTang26/ride_along/blob/master/documents/Front.png)
!["Find a Ride"](https://github.com/KaiTang26/ride_along/blob/master/documents/Find.png)
!["Ride detail"](https://github.com/KaiTang26/ride_along/blob/master/documents/Detail.png)
!["User profile"](https://github.com/KaiTang26/ride_along/blob/master/documents/Profile.png)

# Getting Started

On your first run of this application you will need to setup and seed the database with the following steps.

-Please enter your postgres CLI and run the command:
  CREATE DATABASE ride_along;
-Run npm install
-Run npm start
-Once the localhost loads shut down the server and find db/index.js and Comment out line 38.
  -This clears and sets up the database on start of the app. This needs to  be done once to setup the database but then must be commented out or it will wipe the db on each start of the program.
-Then run the command npm run seed to seed the database
-Finally run npm start and the app is ready to go!
