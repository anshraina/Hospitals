const express = require("express");
const app = express();
const mongoose = require("mongoose")
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.json());

const hospitalsRouter = require("./routes/hospitals")
app.use('/api/hospitals', hospitalsRouter)

app.get('/', (req, res) => {

    res.render("index")
})

const url = process.env.MONGO_URL || "mongodb://localhost/Ambulance";

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/Ambulance", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log("connected to MongoDB successfully"))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000
app.listen(port);