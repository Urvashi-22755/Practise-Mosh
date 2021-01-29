import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    names: ["urvashi"],
  }; //object that can include any data

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
    // console.log('counter clicked');
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" className="m-2" width="200" />
        <br />

        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>

        <button onClick={this.incrementCounter} className="btn btn-primary">
          Add!!
        </button>

        <div>{this.generateNames()}</div>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    const result = "Zero";
    return count === 0 ? result : count;
  }

  generateNames() {
    let sendlist = (
      <div>
        <p className="m-2">A list of Names...</p>
        <ul>
          {this.state.names.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );

    if (this.state.names.length === 0)
      return <p className="m-2">No Names found</p>;
    else return sendlist;
  }

  getBadgeclasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
