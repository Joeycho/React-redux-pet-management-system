
export const fetchPets = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_PETS'})
      fetch('http://localhost:3000/pets').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_PETS', pets: responseJSON.data.map(e=>{e.attributes["id"]=e.id;return e.attributes}) })
      })
    }
  }

export const createPet = (name, breed, desc, owner_id, clinic_id) => {
    return (dispatch) => {
     let pet ={
        name: name, 
        breed: breed,
        desc: desc,
        owner_id: owner_id,
        clinic_id: clinic_id
        }  
      dispatch({ type: 'LOADING_PETS'})
      fetch('http://localhost:3000/pets',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet),
      }).then((res) => {
        console.log("Response: ", res)
        debugger
        const id = res.url.split('/').pop()
        const pet ={
            name: name, 
            breed: breed,
            desc: desc,
            owner: {id: owner_id},
            clinic:{id: clinic_id},
            id: id
          }
        dispatch({ type: 'ADD_PET', pet: pet })    
      })    
    }
  }

  export const destroyPet = (id) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_PETS'})
      fetch(`http://localhost:3000/pets/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        
        console.log("Response: ", res)
        dispatch({ type: 'DELETE_PET', id: id })    
      })    
    }
  }