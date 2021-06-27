
export const fetchOwners = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_OWNERS'})
      fetch('http://localhost:3000/owners').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_OWNERS', owners: responseJSON.data.map(e=>{e.attributes["id"]=e.id;return e.attributes}) })
      })
    }
  }

export const createOwner = (name, email) => {
    return (dispatch) => {
     let owner ={
        name: name, 
        email: email,
        uid: null
        }  
      dispatch({ type: 'LOADING_OWNERS'})
      fetch('http://localhost:3000/owners',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(owner),
      }).then((res) => {
        debugger
        console.log("Response: ", res)
        const id = res.url.split('/').pop()
        const owner ={
            name: name, 
            email: email,
            uid: id
          }
        dispatch({ type: 'ADD_OWNER', owner: owner })    
      })    
    }
  }

  export const destroyOwner = (id) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_OWNERS'})
      fetch(`http://localhost:3000/owners/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        
        console.log("Response: ", res)
        debugger
        dispatch({ type: 'DELETE_OWNER', id: id })    
      })    
    }
  }