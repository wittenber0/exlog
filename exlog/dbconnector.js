const queries = require('./dbqueries.js');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'den1.mysql4.gear.host',
  user: 'mygeneric',
  password: 'Rudish4091$',
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
  let quer =  queries.GET_LIFT_WORKOUTS_BY_ID;
  if(workoutId){
    quer += ' where lift_workouts.lift_workout_id = '+workoutId;
  }
  return new Promise((res, rej) => {
    connection.query(quer, (err, rows)=>{
        if(err) return rej(err);

        res(JSON.parse(JSON.stringify(rows)));
    })
  })

}

module.exports.getAllLiftWorkouts = () =>{
  return module.exports.getLiftWorkoutsById();
}
