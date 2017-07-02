# Count me up

## Instructions to run 

To run
  - Rename .env.example  to '.env' (which has the sample config for a sample firebase data)
    npm instart
    npm start

## Application design design

The problem is open for intepretation, and therefore, i decided to have the following asumption regarding

  - The website are responsible for collecting data (through API), and display in real time
  - The application will have the following API:
    - To update the vote coming from any point of time. System need to check the campagin, candidate, voter that satisfy the condition
    - To show the data to user with real time data

## Technology choices
  - I used the following technologies:
     - Database: Firebase for realtime store and get data. Firebase has proven to be scalable and suitable for real time application. In addition, Firebase database do one thing, and do it well.
     - Backend: NodeJS, ExpressJS (templating) 
     - Front end: Bootstrap, and Jquery

## Current application status:
  - API for getting and updating vote are done. Once the server up we can update the database with POSTMAN by the foolowing parameter:
   - Send GET request to http://localhost:8081/api/getresult/generalElection for getting result
   - Send POST request to http://localhost:8081/api/update with following body: 
                {
                    "campaign":" General election",
                    "campaing_id":"generalElection",
                    "voter":"user5",
                    "candidate":"candidate1"
                }
    to update the vote.
  - If i have more time, i would like to do the following:
   - Add front end to show result, with the form to update vote result (through POST request)
   - Optimize performance with caching
   - Add more feature (notification, ect.)
   - Add authentication for firebase Admin