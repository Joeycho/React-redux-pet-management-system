import { combineReducers } from 'redux';
import manageOwners from './manageOwner';
import manageClinics from './manageClinic';
import managePets from './managePet';

export default combineReducers({
    owners: manageOwners,
    clinics: manageClinics,
    pets: managePets
  });