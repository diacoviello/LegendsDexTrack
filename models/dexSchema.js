var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pokemon = new Schema({
  
  dexId: Number,
  image: { type: String, required: true },
  name: String,
  type1: String,
  type2: { type: String, required: false },
  location: String,
  evolve: String,
  firstTask: String,
  firstNum: Number,
  secondTask: { type: String, required: false },
  secondNum: { type: Number, required: false },
  thirdTask: { type: String, required: false },
  thirdNum: { type: Number, required: false },
  fourthTask: { type: String, required: false },
  fourthNum: { type: Number, required: false },
  fifthTask: { type: String, required: false },
  fifthNum: { type: Number, required: false },
  sixthTask: { type: String, required: false },
  sixthNum: { type: Number, required: false },
  seventhTask: { type: String, required: false },
  seventhNum: { type: Number, required: false },
  eigthTask: { type: String, required: false },
  eigthNum: { type: Number, required: false },
  ninthTask: { type: String, required: false },
  ninthNum: { type: Number, required: false },
});

const data = mongoose.model("data", pokemon)

module.exports = Data