import React, { Component } from "react";
import axios from "axios";

class BowlerRank extends Component {
  constructor(props) {
    super(props);
    this.state = { bowler_records: [] };
  }

  // Gets all batsman data from the database
  // Sort method sorts the recieved data in decending order
  componentDidMount = () => {
    axios
      .get("http://localhost:4000/models/bowl")
      .then(response => {
        const bowler_records = []
          .concat(response.data)
          .sort((a, b) => a.bowlAverage < b.bowlAverage);
        this.setState({ bowler_records });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container">
        <h1>Bowler Rankings</h1>
        <ol>
          {this.state.bowler_records.map(function(records, i) {
            return (
              <li key={i}>
                {records.name}, Average:{records.bowlAverage}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default BowlerRank;
