import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pet extends Component {


  render() {
   
    const {pet, clinics, owners} = this.props;
    return (
      <div>
        <li>
          Name: {pet.name}, Breed: {pet.breed}, Description: {pet.desc} 
          Owner: {(owners.length!==0)?owners.filter(owner=> parseInt(owner.id) === parseInt(pet.owner.id))[0].name:"Loading"} 
          Clinic:{(clinics.length!==0)?clinics.filter(clinic=> parseInt(clinic.id) === parseInt(pet.clinic.id))[0].name:"Loading"}
          <button onClick={(event) => {event.preventDefault();this.props.deletePet(parseInt(pet.id))}}> X </button>
        </li>
      </div>
    );
  }
};

const mapStateToProps = ({clinics, owners }) => ({clinics, owners })

export default connect(mapStateToProps, null)(Pet);
