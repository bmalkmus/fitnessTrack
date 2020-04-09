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
    const exercise = {exercises: [req.body]};
    console.log(req.params.id)
    Workout.update({_id: req.params.id}, exercise)
    .then(function(dbExercise){
        res.json(dbExercise);
    })
    .catch(function(err){
        res.status(400).json(err)
    })
});

module.exports = router;