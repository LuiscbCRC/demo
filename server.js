const express = require('express'); // Importing express module

const app = express(); // Creating an express object

const port = process.env.PORT || 8000;  // Setting an port for this application

app.get('/foo', function (req, res) {
    res.status(200).send("<p>Odio las pruebas operacionales</p>");
  })

app.get('/', function (req, res) {
    res.status(200).json({"Status": "ok"});
})

// Starting server using listen function
app.listen(port, function (err) {
   if(err){
       console.log("Error while starting server");
   }
   else{
       console.log("Server has been started at "+port);
   }
})