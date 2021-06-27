import React, { Component } from 'react';


class Clinic extends Component {


  render() {
    const { clinic } = this.props;

    return (
      <div>
        <li>
          Name: {clinic.name}, Address: {clinic.addr}
          <button onClick={(event) => {event.preventDefault();this.props.deleteClinic(clinic.id)}}> X </button>
        </li>
      </div>
    );
  }
};

export default Clinic;
