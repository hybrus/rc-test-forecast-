RC TEST FORECAST with Accuweather API

Developent Software: 
  - Node.js 16.14.0.
  - NPM 8.17.0

Library Used: 
  • react 17.0.1
  • react-bootstrap 2.5.0
  • react-redux 7.1.3
  • react-router-dom 5.2.0
  • react-select 5.4.0
  • dayjs 1.11.5
 

Instruction: 
  1. download the repository
  2. copy .env.example as .env and place Accuweather API KEY to REACT_APP_API_KEY
  3. open the project folder with cmd/terminal
  4. run `npm install`
  5. run 'npm run start'
  6. go to http://localhost:3000/

About the APP: 
  Initially, the app will fetch the client details from `https://geolocation-db.com/json` to get the client IP.
  Then it will use that IP to get the necessary information to Accuweather API, I also added the city searching functionality.

