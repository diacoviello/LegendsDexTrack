const express = require('express')
const mongoose = require('mongoose')
var app = express()

mongoose.connect("mongodb://localhost/dexDB")

mongoose.connection.once("open", () => {
    console.log("Connected to database!")

}).on("error", (error) => {
    console.log("Failed to connect " + error)
})

