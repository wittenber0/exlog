const queries = require('./dbqueries.js');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'den1.mysql4.gear.host',
  user: 'mygeneric',
  password: 'Ng92KAB4?4~5',
  database: 'mygeneric'
});
module.exports.connect = () =>{
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });
}

module.exports.disconnect = () =>{
  connection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Closed the database connection.');
  });
}

module.exports.getLiftWorkoutsById = (workoutId) =>{
  return new Promise((res, rej) => {
    connection.query(queries.GET_LIFT_WORKOUTS_BY_ID+workoutId, (err, rows)=>{
        if(err) return rej(err);
    
        res(JSON.parse(JSON.stringify(rows)));
    })
  })
    
}

