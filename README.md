RC TEST FORECAST with Accuweather API

Software Required
  Nodejs with NPM

Library Used
  "react": "^17.0.1",
  "react-bootstrap": "^2.5.0",
  "react-redux": "^7.1.3",
  "react-router-dom": "^5.2.0",
  "react-select": "^5.4.0"
  "bootstrap": "^5.2.1",
  "dayjs": "^1.11.5",
 

Instruction
  1. copy .env.example as .env and place Accuweather API KEY to REACT_APP_API_KEY
  2. run `npm install`
  3. run 'npm run start'

About the APP
  On the first load, it will fetch the client details to `https://geolocation-db.com/json` to get the client IP.
  Then it will use that IP to get the necessary information to Accuweather API, I also added the city searching functionality
  
  Duration
   3hrs & 30mins
