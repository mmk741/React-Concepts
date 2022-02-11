import React,{useEffect} from 'react'
import { Fragment } from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import { deleteUser, loadUsers } from '../Redux/action'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'


function Home() {

    let dispatch=useDispatch()

useEffect(()=>{
    dispatch(loadUsers())
},[]) 

const history=useHistory();
const {users}=useSelector(state=>state.usersList);


const deleteHandler=(id)=>{

    if(window.confirm(`Do you want to delete ${id}`))
    {
        dispatch(deleteUser(id));
    }
}




    return (
        <Fragment>

<div className="text-center my-5">
 <Link to='/create' > <button type="submit" className="btn btn-primary" > create</button></Link>
 </div>
<br /><br />


<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">address</th>
      <th scope="col">email</th>
      <th scope="col">contact</ th>
      <th scope="col" colSpan="2">Action</ th>
    </tr>
  </thead>
  <tbody >
      
    {users && users.map((ele,ind)=>{
        return (
            <tr key={ind}>
      <th scope="row">{ind+1}</th>
      <td>{ele.name}</td>
      <td>{ele.address}</td>
      <td>{ele.email}</td>
      <td>{ele.contact}</td>
     
          <td><div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary" onClick={()=>history.push(`/edit/${ele.id}`)}>Edit </button>
  <button type="button" className="btn btn-danger" onClick={()=>deleteHandler(ele.id)}>Delete</button>
  
</div></td>
     

    </tr>
   
        )
    })}
    
  </tbody>
</table>
        </Fragment>
    )
}

export default Home
