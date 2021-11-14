const express = require('express');
const router = express.Router();
const DroneModel = require("../models/Drone.model");
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
  .then((drones) => {
    res.render('drones/list.hbs', {drones})
  })
  .catch((error) => {
    next(error)
  })
})

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log( req.body )
  const {name, propellers, maxSpeed} = req.body

  DroneModel.create({name, propellers, maxSpeed})
        .then(() => {

          res.redirect('/drones')
})
.catch((error) => {
  next(error)
})

})

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {droneId} = req.params

    DroneModel.findById(droneId)
        .then((drone) => {
            
            res.render('drones/update-form.hbs', {drone})
        })
        .catch(() => {
            next(error)
        })
}),

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {name, propellers, maxSpeed} = req.body

    
    const {droneId} = req.params

    
    DroneModel.findByIdAndUpdate(droneId, {name, propellers, maxSpeed})
        .then(() => {
            res.redirect('/drones')
        })
        .catch(() => {
            next(error)
        })
}),

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {droneId} = req.params 
    
    
    DroneModel.findByIdAndDelete(droneId)
        .then(() => {
            
            res.redirect('/drones')
        })
        .catch(() => {
            next(error)
        })
}),

module.exports = router;
