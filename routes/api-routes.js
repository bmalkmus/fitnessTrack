const router = require("express").Router();
// const db = require("../models")
const Workout = require("../models/workout.js")

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(function(dbWork){
          res.json(dbWork)
      })
      .catch(function (err){
        res.status(400).json(err);
    })
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(function(dbWork){
          res.json(dbWork)
      })
      .catch(function (err){
        res.status(400).json(err);
    })
  });

router.post("/api/workouts", function ({body}, res){
    Workout.create(body)
    .then(function (dbWorkout){
        res.json(dbWorkout);
    })
    .catch(function (err){
        res.status(400).json(err);
    })
});

router.put("/api/workouts/:id", function(req, res){
    console.log(req.body.duration)
    let obj = {totalDuration : req.body.duration}
    Workout.update({_id: req.params.id}, { $push: { exercises: req.body }, $inc: obj})
    .then(function(dbExercise){
        res.json(dbExercise);
    })
    .catch(function(err){
        res.status(400).json(err)
    })
});

module.exports = router;