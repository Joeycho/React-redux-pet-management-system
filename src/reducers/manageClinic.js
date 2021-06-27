
export default function manageClinics(state = [], action) {

    switch (action.type) {
  
      case 'LOADING_CLINICS':
        
        console.log("Loading:::")
        return  state
    
      case 'ADD_CLINICS':
        return  action.clinics  
  
      case 'ADD_CLINIC':
        return  state.concat(action.clinic)
  
      case 'DELETE_CLINIC':

        return state.filter(clinic => clinic.id !== action.id)
  
      default: 
        return state;
    }
}
