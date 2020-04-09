const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type:{
            type: String,
            trim: true,
            required: true
        },
        name:{
            type: String,
            trim: true,
            required: "Enter a name of the exercise"
        },
        duration:{
            type: Number,
            required: "Enter number of minutes it took to complete the exercise"
        },
        weight: {
            type: Number
        },
        reps:{
            type: Number
        },
        sets:{
            type: Number
        },
        distance: {
            type: Number
        }
    }
})

const Workout = mongoose.model("workouts", workoutSchema);
module.exports = Workout;