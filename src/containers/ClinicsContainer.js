import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClinicInput from '../components/clinics/ClinicInput';
import Clinics from '../components/clinics/Clinics';
import {createClinic, destroyClinic, fetchClinics} from '../actions/clinicActions'

class ClinicsContainer extends Component {

  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchClinics()
  }

  render() {
    return (
      <div>
        <ClinicInput addClinic={this.props.addClinic}/>
        <Clinics clinics={this.props.clinics} deleteClinic={this.props.deleteClinic}/>
        </div>
    )
  }
}

const mapStateToProps = ({ clinics }) => ({ clinics })

const mapDispatchToProps = dispatch => ({
  addClinic: (name, addr) => dispatch(createClinic(name, addr)),
  deleteClinic: id => dispatch(destroyClinic(id)),
  fetchClinics: ()=> dispatch(fetchClinics())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClinicsContainer)