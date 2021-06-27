import React, { Component } from 'react';


class Owner extends Component {


  render() {
    const { owner } = this.props;

    return (
      <div>
        <li>
          Name: {owner.name}, Email: {owner.email}
          <button onClick={(event) => {event.preventDefault();this.props.deleteOwner(owner.id)}}> X </button>
        </li>
      </div>
    );
  }
};

export default Owner;
