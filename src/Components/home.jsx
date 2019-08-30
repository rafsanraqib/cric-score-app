import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    val1: "Bowler",
    val2: "Batsman",
    val3: "Bowler Ranking",
    val4: "Batsman Ranking"
  };

  render() {
    return (
      <div className="container">
        <Link to="/Formbt">
          <input
            type="button"
            className="btn btn-primary btn-lg"
            value={this.state.val2}
          />
        </Link>
        <Link to="/Wicketfm">
          <input
            type="button"
            className="btn btn-primary btn-lg"
            value={this.state.val1}
          />
        </Link>
        <Link to="/BowlerRank">
          <input
            type="button"
            className="btn btn-primary btn-lg"
            value={this.state.val3}
          />
        </Link>
        <Link to="/BatsmanRank">
          <input
            type="button"
            className="btn btn-primary btn-lg"
            value={this.state.val4}
          />
        </Link>
      </div>
    );
  }
}

export default Home;
