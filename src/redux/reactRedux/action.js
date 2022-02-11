import * as types from './actionType';
import axios from 'axios';

 const getUsers=(users)=>{
     return {
         type:types.GetUsers,
         payload:users
     }
 }

 export const loadUsers=()=>{
    return  (dispatch)=>{
   
     axios.get(`${process.env.REACT_APP_API}`)
         .then(r=>{
            
             dispatch(getUsers(r.data))
         })
         .catch(err=>{
             console.log("this is your error",err);
         })

    } 
}

const Userdeleted=()=>{
    return {
        type:types.DeleteUser,
        
    }

}


export const deleteUser=(id)=>{
    return  (dispatch)=>{
   
     axios.delete(`${process.env.REACT_APP_API}/${id}`)
         .then(r=>{
            
             dispatch(Userdeleted());
             dispatch(loadUsers());
            
         })
         .catch(err=>{
             console.log("this is your error",err);
         })

    } 
}


const Useradded=()=>{
    return {
        type:types.AddUser,
       
        
    }

}




export const addUser=(data)=>{
    return  (dispatch)=>{
   
     axios.post(`${process.env.REACT_APP_API}`,data)
         .then(r=>{
            
             dispatch(Useradded());
             dispatch(loadUsers());
            
             
            
         })
         .catch(err=>{
             console.log("this is your error",err);
         })

    } 
}


const Singleuser=(user)=>{
  
    return {
        type:types.GetSingleUser,
        payload:user
       
        
    }

}

export const getSingleUser=(id)=>{
    return  (dispatch)=>{
   
     axios.get(`${process.env.REACT_APP_API}/${id}`)
         .then(r=>{
            
             dispatch(Singleuser(r.data));
             
            
             
            
         })
         .catch(err=>{
             console.log("this is your error",err);
         })

    } 
}


const userUpdated=()=>{
  
    return {
        type:types.UpdateUser
        
       
        
    }

}



export const updateUser=(id,data)=>{
    return  (dispatch)=>{
   
     axios.put(`${process.env.REACT_APP_API}/${id}`,data)
         .then(r=>{
            
             dispatch(userUpdated());
             dispatch(loadUsers());
             
            
             
            
         })
         .catch(err=>{
             console.log("this is your error",err);
         })

    } 
}