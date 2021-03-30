const express = require("express");
const { copyFileSync } = require("fs");
const https = require("https");
const app = express();

/* Search by Title Name Functionality:     

const bp = require("body-parser");
const bodyParser = require("body-parser");

*/


// Directory of Logo & CSS Files

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));


app.set('view engine', 'ejs');


app.get("/", function(req, res){

    // Interchangeable URL

    const url = "https://ghibliapi.herokuapp.com/films";
    https.get(url, function(response) {
        console.log(response.statusCode);
        var data;
        response.on("data", function(chunk) {
            if (!data) {
               data = chunk
            }
            else {
                data += chunk
            }
        })
        response.on("end", function() {

        // qdata is an array of the parsed JSON retrieved from the URL

        var qdata = JSON.parse(data)
        res.render('index', {qdata: qdata})
        })
    })
})


app.listen(3000, function() {
    console.log("Running on 3000.");
})