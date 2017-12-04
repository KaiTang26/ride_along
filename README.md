Getting Started

On your first run of this application you will need to setup and seed the database with the following steps.

  -Please enter your postgres CLI and run the command:
      CREATE DATABASE ride_along;
  -Run npm install
  -Run npm start
  -Once the localhost loads shut down the server and find db/index.js and Comment out line 38.
    -This clears and sets up the database on start of the app. This needs to  be done once to setup the database but then must be commented out or it will wipe the db on each start of the program.
  -Then run the command npm run seed to seed the database
  -Finally run npm start and the app is ready to go!
