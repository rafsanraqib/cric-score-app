// Server implimentation.
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
const address = "mongodb://localhost/Player_Records";
const routes = express.Router();

// Enable cors and bodyParser middleware
app.use(cors());
app.use(bodyParser.json());

const Models = require("./models");

// Allows models to use the routes
app.use("/models", routes);

// Route that allows server to request all batsman information
routes.route("/bat").get(function(req, res) {
  Models.Batsman.find(function(err, records) {
    if (err) {
      console.log("Error");
    } else {
      res.json(records);
    }
  });
});

// Route that allows server to request bowlers data from the database
routes.route("/bowl").get(function(req, res) {
  Models.Bowler.find(function(err, records) {
    if (err) {
      console.log("Error");
    } else {
      res.json(records);
    }
  });
});

// ALlows the server to send data to the database to update an existing batsman record
routes.route("/updatebat/:idbat").post(function(req, res) {
  recordType = Models.Batsman;
  recordType.findById(req.params.idbat, function(err, records) {
    if (!records) {
      res.status(404).send("cant find item");
    } else {
      records.name = req.body.name;
      records.runs = req.body.runs;
      records.matches = req.body.matches;

      records
        .save()
        .then(records => {
          res.json("Records updated");
        })
        .catch(err => {
          res.status(400).send("update not possible");
        });
    }
  });
});

// Allws the server to add new bowler record to the database
routes.route("/addbowl").post(function(req, res) {
  let bowler = new Models.Bowler(req.body);
  bowler
    .save()
    .then(bowler => {
      res.status(200).json({ bowler: "successfully added" });
    })
    .catch(err => {
      res.status(400).send("adding new record failed");
    });
});

// Adds new batsman record to the database
routes.route("/addbat").post(function(req, res) {
  let batsman = new Models.Batsman(req.body);
  batsman
    .save()
    .then(batsman => {
      res.status(200).json({ batsman: "successfully added" });
    })
    .catch(err => {
      res.status(400).send("adding new record failed");
    });
});

// Updates an existing bowler record in the database
routes.route("/updatebowl/:idbowl").get(function(req, res) {
  Models.Bowler.findById(req.params.idbowl, function(err, records) {
    if (!records) {
      res.status(400).send("cant find item");
    } else {
      records.name = req.body.name;
      records.runs = req.body.runs;
      records.matches = req.body.matches;

      records
        .save()
        .then(records => {
          res.json("Records updated");
        })
        .catch(err => {
          res.status(400).send("update not possible");
        });
    }
  });
});

// Initiates the server
app.listen(PORT, function() {
  console.log("Server started at port " + PORT);
});

// Uses mongoose to connect to MongoDB
mongoose.connect(address, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB connection established");
});
