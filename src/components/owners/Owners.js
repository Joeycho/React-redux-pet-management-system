import React, { Component } from 'react';
import Owner from './Owner';

class Owners extends Component {

  render() {
    return(
      <ul>
      {this.props.owners.map((owner) => <Owner key={owner.id} owner={owner} deleteOwner={this.props.deleteOwner}/>)}
      </ul>
    );
  }
};

export default Owners;