// Creates the database model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for storing batsman data
const PlayerRunsSchema = new Schema({
  name: String,
  runs: Number,
  matches: Number,
  batAverage: Number
});

// Schema for storing bowler data
const bowlersWicketsSchema = new Schema({
  name: String,
  wickets: Number,
  matches: Number,
  bowlAverage: Number
});

const Runs_model = mongoose.model("runs_record", PlayerRunsSchema);
const Bowl_model = mongoose.model("Bowler Record", bowlersWicketsSchema);

// Exports the models to be accessed by other files.
module.exports = {
  Batsman: Runs_model,
  Bowler: Bowl_model
};
