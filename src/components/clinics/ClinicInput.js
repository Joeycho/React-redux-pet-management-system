import React, { Component } from 'react';

class ClinicInput extends Component {
  state = {
    name: "",
    addr: ""
  }

  handleOnChange = event => {
    if(event.target.id==="name"){
      this.setState({
        ...this.state,
        name: event.target.value
      });
    }
    else{
      this.setState({
        ...this.state,
        addr: event.target.value
      });
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addClinic(this.state.name,this.state.addr);
    this.setState({
      name: "",
      addr: ""
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <label for="name">Name:</label>
        <input id="name" type="text" onChange={this.handleOnChange} value={this.state.name}></input>
        <br></br>
        <label for="addr">Address:</label>
        <input id="addr" type="text" onChange={this.handleOnChange} value={this.state.addr}></input>
        <input type="submit" value="Add Clinic"></input>
        </form>
      </div>
    );
  }
};



export default ClinicInput;
