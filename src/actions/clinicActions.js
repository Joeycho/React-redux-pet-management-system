import cuid from 'cuid';

export const fetchClinics = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CLINICS'})
      fetch('http://localhost:3000/clinics').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_CLINICS', clinics: responseJSON.data.map(e=>{e.attributes["id"]=e.id;return e.attributes}) })
      })
    }
  }

  export const createClinic = (name, addr) => {
    return (dispatch) => {
     let clinic ={
        name: name, 
        addr: addr,
        id: null
        }  
      dispatch({ type: 'LOADING_CLINICS'})
      fetch('http://localhost:3000/clinics',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clinic),
      }).then((res) => {
     
        console.log("Response: ", res)
        const id = res.url.split('/').pop()
        const clinic ={
            name: name, 
            addr: addr,
            id: id
          }
        dispatch({ type: 'ADD_CLINIC', clinic: clinic })    
      })    
    }
  }

  export const destroyClinic = (id) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CLINICS'})
      fetch(`http://localhost:3000/clinics/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        console.log("Response: ", res)
        dispatch({ type: 'DELETE_CLINIC', id: id })    
      })    
    }
  }