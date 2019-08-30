import React, { Component } from "react";

class Wicketfm extends Component {
  state = {
    nameData: "",
    wicketData: 0,
    matchesData: 0
  };

  // Handles wickets data recieved from the input field
  handleWickets = value => {
    let wicketData = this.state.wicketData;
    wicketData = value;
    this.setState({ wicketData });
  };

  // Handles matches data recieved from the input field
  handleMatches = value => {
    let matchesData = this.state.matchesData;
    matchesData = value;
    this.setState({ matchesData });
  };

  // Handles name data rcieved from the name field
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
        <div className="contanerl">
          <input
            type="text"
            className="form-control"
            placeholder="Wickets taken"
            onChange={e => this.handleWickets(e.target.value)}
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
                  this.state.wicketData,
                  this.state.matchesData
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

export default Wicketfm;
