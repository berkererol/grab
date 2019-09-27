## GRAB - A food ordering platform
GRAB is a mock food ordering website submitted as the midterm project in the Lighthouse Labs Web Development Bootcamp.
This project is a collaboration between Berker Erol and Edgar Rojas. Our web application is built with Node JS, Express, AJAX, jQuery, HTML5, PostgreSQL and the Twilio API.

!["Screenshot of Main Page."](https://github.com/berkererol/grab/blob/master/docs/main_page.gif)

!["Screenshot of Menu Page."](https://github.com/berkererol/grab/blob/master/docs/menu_page.gif


## Statement
GRAB facilitates food ordering experience by allowing a user to place an order online and recieve a text message when their order is ready for pick up from the restaurant. 

## Getting Started

Install all dependencies (using npm install)
Setup the database with migration files.
Seed your database with seed files.
You may need to grant all privileges to the user of your database.


## Twilio Setup
1. Set up a connection with local host 8080 and copy the URL of your tunnel
2. Sign up for an account with Twilio
3. Get a Twilio phone number
4. Set the request URL to your tunneled address
5. Create a module that's linked to server.js and set the variables with your ngrok info. Set twilioID , twilioToken,    twilioNumber, and test_number
6. Run the development web server using npm start

- Visit http://localhost:8080/
- You will not need 'ngrok' because we are using AJAX to handle Twilio requests.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Express 4.16.3 or above
- Body Parser 1.15.2 or above
- Nodemon 1.9.2 or above
- Twilio 3.16.0 or above
