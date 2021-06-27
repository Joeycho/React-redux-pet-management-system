
export default function manageOwners(state = [], action) {

    switch (action.type) {

     case 'LOADING_OWNERS':
        
        console.log("Loading:::")
        return  state
    
      case 'ADD_OWNERS':
        return  action.owners  
  
      case 'ADD_OWNER':
        return  state.concat(action.owner)
  
      case 'DELETE_OWNER':

        return state.filter(owner => owner.id !== action.id)
  
      default: 
        return state;
    }
}
