const queries = require('./dbqueries.js');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'den1.mysql4.gear.host',
  user: 'mygeneric',
  password: 'Ng92KAB4?4~5',
  database: 'mygeneric'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

getLiftWorkoutsById(1);

connection.end(function(err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Closed the database connection.');
});

function getLiftWorkoutsById(workoutId){
    connection.query(queries.GET_LIFT_WORKOUTS_BY_ID+workoutId, (err, rows)=>{
        if(err) throw err;
    
        console.log(JSON.parse(JSON.stringify(rows)));
    })
}

