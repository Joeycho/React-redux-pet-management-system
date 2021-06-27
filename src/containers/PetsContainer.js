import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetInput from '../components/pets/PetInput';
import Pets from '../components/pets/Pets';
import {createPet, fetchPets, destroyPet} from '../actions/petActions'
import { fetchOwners } from '../actions/ownerActions';
import {fetchClinics} from '../actions/clinicActions';

class PetsContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchPet()
    this.props.fetchClinics()
    this.props.fetchOwners()
  }

  render() {
    return (
      <div>
        <PetInput owners={this.props.owners} clinics={this.props.clinics} addPet={this.props.addPet}/>
        <Pets pets={this.props.pets} deletePet={this.props.deletePet}/>
      </div>
    )
  }
}

const mapStateToProps = ({ pets, clinics, owners }) => ({ pets, clinics, owners })

const mapDispatchToProps = dispatch => ({
  addPet: (pet) => dispatch(createPet(pet.name, pet.breed, pet.desc, pet.owner_id, pet.clinic_id)),
  deletePet: id => dispatch(destroyPet(id)),
  fetchPet: () => dispatch(fetchPets()),
  fetchClinics: ()=>dispatch(fetchClinics()),
  fetchOwners: ()=>dispatch(fetchOwners())
})

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer);
