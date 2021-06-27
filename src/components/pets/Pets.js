import React, { Component } from 'react';
import Pet from './Pet';

class Pets extends Component {

  render() {

    return(
      <ul>
      {this.props.pets.map((pet) => <Pet key={pet.id} pet={pet} deletePet={this.props.deletePet}/>)}
      </ul>
    );
  }
};

export default Pets;