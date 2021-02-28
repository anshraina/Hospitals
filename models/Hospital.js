const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
    },

    x_coordinate: Number,
    y_coordinate: Number,

    bedsAvailable: {
        type: Number,
        required: true,
    },
    ventilators: {
        type: Number,
        required: true
    }
})

const Hospital = mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital

