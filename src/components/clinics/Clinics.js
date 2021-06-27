import React, { Component } from 'react';
import Clinic from './Clinic';

class Clinics extends Component {

  render() {

    return(
      <ul>
      {this.props.clinics.map((clinic) => <Clinic key={clinic.id} clinic={clinic} deleteClinic={this.props.deleteClinic}/>)}
      </ul>
    );
  }
};

export default Clinics;