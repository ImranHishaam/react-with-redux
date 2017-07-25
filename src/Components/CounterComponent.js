import React, { Component } from 'react';

class CounterComponent extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <button onClick={ () => this.props.increment()}> Increase Count </button>
        <div> The Count is = {this.props.count} </div>
        <button onClick={ () => this.props.decrement()}> Decrease Count </button>
        <p className="App-intro">
          Redux has been setup in the project.
          </p>
      </div>
    );
  }
}


export default CounterComponent;