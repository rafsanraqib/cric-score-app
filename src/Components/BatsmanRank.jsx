import React, { Component } from "react";
import axios from "axios";

class BatsmanRank extends Component {
  constructor(props) {
    super(props);
    this.state = { batsman_records: [] };
  }

  // Gets all batsman data from the database
  // Sort method sorts the recieved data in decending order
  componentDidMount = () => {
    axios
      .get("http://localhost:4000/models/bat")
      .then(response => {
        const batsman_records = []
          .concat(response.data)
          .sort((a, b) => a.runs < b.runs);
        this.setState({ batsman_records });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <ol>
          <h1>Batsman Ranking</h1>
          {this.state.batsman_records.map(function(records, i) {
            return (
              <li key={i}>
                {records.name} Average:{records.batAverage}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default BatsmanRank;
