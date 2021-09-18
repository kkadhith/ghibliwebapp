# Studio Ghibli Film List
![wikilogo](https://upload.wikimedia.org/wikipedia/en/c/ca/Studio_Ghibli_logo.svg)

This is a simple web application that displays information retrived from Studio Ghibli's API using Express and EJS. 

# Background
See: https://en.wikipedia.org/wiki/Studio_Ghibli
Data is retrieved using the [Studio Ghibli API](https://ghibliapi.herokuapp.com).

# Installation
Assuming [Node](https://nodejs.org/en/) is installed, clone this repo, navigate to the directory and run:

`nodemon app.js` 

This fetches the JSON file from the API and writes a dynamic html file that displays the results. 

It should run on `localhost:3000` by default, but that can be changed in app.js.

# Testing
[Nightwatch.js](https://nightwatchjs.org/) can be used to test if the app is running and/or if elements are being displayed. Running 
`npm test`
should display the test cases in the terminal and it should pass by default. Additionally, test results are outputted automatically in `tests_output`.

