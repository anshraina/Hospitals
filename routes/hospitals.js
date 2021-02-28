const express = require("express")
const router = express.Router()
const Hospital = require("../models/Hospital")

router.get('/', async (req, res, next) => {
    try {

        const hospitals = await Hospital.find()

        res.send(hospitals);

    } catch (ex) {
        console.log(ex.message)
    }

})


router.get('/:id', async (req, res, next) => {
    try {

        const hospitals = await Hospital.findById(req.params.id)

        res.send(hospitals);

    } catch (ex) {
        console.log(ex.message)
    }

})

router.post('/new', async (req, res) => {

    let hospital = new Hospital({
        name: req.body.name,

        x_coordinate: req.body.x_coordinate,
        y_coordinate: req.body.y_coordinate,

        bedsAvailable: req.body.beds,
        ventilators: req.body.ventilators
    })
    try {
        await hospital.save();
        res.redirect("/")
    }
    catch (ex) {
        console.log(ex.message)
    }

})
router.post('/update/:id', async (req, res) => {
    beds = req.body.beds
    ventilators = req.body.ventilators
    try {
        await Hospital.findByIdAndUpdate(req.params.id, { bedsAvailable: beds, ventilators: ventilators })
        res.send("Success")
    }
    catch (ex) {
        console.log(ex.message)
    }

})
module.exports = router