const express = require('express'); // Importing express module

const path = require('path');

const app = express(); // Creating an express object

const port = process.env.PORT || 8000;  // Setting an port for this application

app.use(express.urlencoded({extended: true}));

app.use(express.json())

app.get('/index', function (req, res) {
    res.status(200).sendFile(path.join(__dirname+'/index.html'));
  })

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
});

app.get('/', function (req, res) {
    res.status(200).json({"Status": "ok"});
})

app.post('/api', function (req, res){
    res.status(200).json({
        "Username": req.body.username,
        "Password": req.body.password});
    
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