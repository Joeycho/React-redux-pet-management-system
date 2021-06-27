import React, { Component } from 'react';

class OwnerInput extends Component {
  state = {
    name: "",
    email: ""
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
        email: event.target.value
      });
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addOwner(this.state.name,this.state.email);
    this.setState({
      name: "",
      email: ""
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <label for="name">Name:</label>
        <input id="name" type="text" onChange={this.handleOnChange} value={this.state.name}></input>
        <br></br>
        <label for="email">Email:</label>
        <input id="email" type="text" onChange={this.handleOnChange} value={this.state.email}></input>
        <input type="submit" value="Add Owner"></input>
        </form>
      </div>
    );
  }
};



export default OwnerInput;
