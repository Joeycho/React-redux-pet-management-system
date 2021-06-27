import React, { Component } from 'react';

class PetInput extends Component {
  state = {
    name: "",
    breed: "",
    desc: ""
  }

  handleOnChange = event => {
    if(event.target.id==="name"){
      this.setState({
        ...this.state,
        name: event.target.value
      });
    }
    else if(event.target.id==="breed"){
      this.setState({
        ...this.state,
        breed: event.target.value
      });
    }
    else{
      this.setState({
        ...this.state,
        desc: event.target.value
      });
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const pet ={
      name: this.state.name,
      breed: this.state.breed,
      desc:this.state.desc,
      owner_id: event.target.getElementsByTagName('select').owner.value,
      clinic_id:event.target.getElementsByTagName('select').clinic.value
    }
    this.props.addPet(pet);
    this.setState({
      name: "",
      breed: "",
      desc: "",
      owner_id: null,
      clinic_id: null
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <label for="name">Name:</label>
        <input id="name" type="text" onChange={this.handleOnChange} value={this.state.name}></input>
        <br></br>
        <label for="breed">Breed:</label>
        <input id="breed" type="text" onChange={this.handleOnChange} value={this.state.breed}></input>
        <label for="desc">Description:</label>
        <input id="desc" type="text" onChange={this.handleOnChange} value={this.state.desc}></input>
        <label for="own">Owner:</label>
        <select id="own" name="owner">
          {this.props.owners.map(owner => <option value={owner.id}>{owner.name}</option>)}
        </select>
        <label for="clinic">Clinic:</label>
        <select id="clinic" name="clinic">
          {this.props.clinics.map(clinic => <option value={clinic.id}>{clinic.name}</option>)}
        </select>
        
        
        <input type="submit" value="Add Pet"></input>
        </form>
      </div>
    );
  }
};



export default PetInput;
