const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerRunsSchema = new Schema({
  name: String,
  runs: Number,
  matches: Number,
  batAverage: Number
});

const bowlersWicketsSchema = new Schema({
  name: String,
  wickets: Number,
  matches: Number,
  bowlAverage: Number
});

const Runs_model = mongoose.model("runs_record", PlayerRunsSchema);
const Bowl_model = mongoose.model("Bowler Record", bowlersWicketsSchema);

module.exports = {
  Batsman: Runs_model,
  Bowler: Bowl_model
};
