export default function managePets(state = [], action) {

    switch (action.type) {
  
    case 'LOADING_PETS':
    
        console.log("Loading:::")
        return  state

    case 'ADD_PETS':
        return  action.pets  
  
    case 'ADD_PET':
        return  state.concat(action.pet)
  
    case 'DELETE_PET':
        return state.filter(pet => parseInt(pet.id) !== parseInt(action.id))
  
    default: 
        return state;
    }
}
