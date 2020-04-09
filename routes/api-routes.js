const router = require("express").Router();
const db = require("../models")

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(function(dbWork){
          console.log(dbWork);
          res.json(dbWork)
      })
      .catch(function (err){
        res.status(400).json(err);
    })
  });

router.post("/api/workouts", function ({body}, res){
    console.log(":-D");
    console.log(body);
    db.Workout.create(body)
    .then(function (dbWorkout){
        console.log(":-DD");
        res.json(dbWorkout);
    })
    .catch(function (err){
        res.status(400).json(err);
    })
});

module.exports = router;