import React, { Component } from "react";
import Formbt from "./Components/runsForm";
import Wicketfm from "./Components/wicketForm";
import BatsmanRank from "./Components/BatsmanRank";
import BowlerRank from "./Components/BowlerRank";
import Home from "./Components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  // Creates a record document 'runs_record'
  // Uses axios to post the data to the database
  dataHandler = (name, runs, match) => {
    let average = parseInt(runs, 10) / parseInt(match, 10);
    const runs_record = {
      name: name,
      runs: parseInt(runs, 10),
      matches: parseInt(match, 10),
      batAverage: average
    };
    axios
      .post("http://localhost:4000/models/addbat", runs_record)
      .then(res => console.log(res.data));
  };

  wicketHandler = (name, wicket, matches) => {
    let average = parseInt(wicket) / parseInt(matches);
    const bowler_record = {
      name: name,
      wickets: parseInt(wicket, 10),
      matches: parseInt(matches, 10),
      bowlAverage: average
    };
    axios
      .post("http://localhost:4000/models/addbowl", bowler_record)
      .then(res => console.log(res.data));
  };
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/Formbt"
              render={props => (
                <Formbt {...props} handleData={this.dataHandler} />
              )}
            />
            <Route path="/BowlerRank" exact component={BowlerRank} />
            <Route path="/BatsmanRank" exact component={BatsmanRank} />
            <Route
              path="/Wicketfm"
              render={props => (
                <Wicketfm {...props} handleData={this.wicketHandler} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
