import React, { Component } from "react";

class Formbt extends Component {
  state = {
    nameData: "",
    runsData: 0,
    matchData: 0
  };

  // Sets the runs data recieved from the input field
  handleRuns = value => {
    let runsData = this.state.runsData;
    runsData = value;
    this.setState({ runsData });
  };

  // Sets the matches data recieved from the input field
  handleMatches = value => {
    let matchData = this.state.matchData;
    matchData = value;
    this.setState({ matchData });
  };

  // Sets the name data recieved from the input field
  handleName = value => {
    let nameData = this.state.nameData;
    nameData = value;
    this.setState({ nameData });
  };
  render() {
    return (
      <div className="input-group w-25">
        <div className="containerl">
          <input
            type="text"
            className="form-control"
            placeholder="Player name"
            onChange={e => this.handleName(e.target.value)}
          ></input>
        </div>
        <div className="containerl">
          <input
            type="text"
            className="form-control"
            placeholder="Runs scored"
            onChange={e => this.handleRuns(e.target.value)}
          />
        </div>
        <div className="containerl">
          <input
            type="text"
            className="form-control"
            placeholder="Matches played"
            onChange={e => this.handleMatches(e.target.value)}
          />
        </div>
        <div className="container;">
          <span className="input-group-btn">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() =>
                this.props.handleData(
                  this.state.nameData,
                  this.state.runsData,
                  this.state.matchData
                )
              }
            >
              submit
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Formbt;
