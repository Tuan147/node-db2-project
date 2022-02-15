// DO YOUR MAGIC
const express = require('express');
const Car = require('./cars-model');
const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require('./cars-middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.json(cars)
    }
    catch (e) {
        next(e)
    }
});

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.car)
});

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
    try {
        const car = Car.create(req.body);
        res.json(car)
    } 
    catch (e) {
        next(e)
    }
});

module.exports = router;