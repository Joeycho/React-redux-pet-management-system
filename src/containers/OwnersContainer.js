import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwnerInput from '../components/owners/OwnerInput';
import Owners from '../components/owners/Owners';
import { fetchOwners, createOwner, destroyOwner } from '../actions/ownerActions';

class OwnersContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchOwners()
  }

  render() {
    return (
      <div>
        <OwnerInput addOwner={this.props.addOwner}/>
        <Owners owners={this.props.owners} deleteOwner={this.props.deleteOwner}/>
      </div>
    )
  }
}

const mapStateToProps = ({ owners }) => ({ owners })

const mapDispatchToProps = dispatch => ({
  addOwner: (name, email) => dispatch(createOwner(name, email)),
  deleteOwner: id => dispatch(destroyOwner(id)),
  fetchOwners: () => dispatch(fetchOwners())
})

export default connect(mapStateToProps, mapDispatchToProps)(OwnersContainer)