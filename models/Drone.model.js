// Iteration #1
const mongoose = require('mongoose')

const DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
})

const DroneModel = mongoose.model("Drones", DroneSchema)

module.exports = DroneModel