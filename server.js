const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(request, response){
    response.send("Hello!");
});

app.get("/about", function(request, response){
    response.send("I am still learning");
});

app.get("/contact", function(request, response){
    response.send("Call me!");
})

app.listen(port, function(){
    console.log(`Server has started on http://localhost:${port}`);
});

// use nodemon.io for ease of server updates