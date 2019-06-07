const express = require('express');
const app = express();
const port = process.env.port || 5000;

const db = require('./dbconnector.js');
db.connect();

app.listen(port, ()=>console.log("listening on port " + port));

app.get('/api', (req, res) =>{

    db.getAllLiftWorkouts().then((data)=>res.send(data));
})
