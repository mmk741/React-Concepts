import React, { Fragment } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/action';
import { useHistory } from 'react-router';
function Createuser() {
  
    const [data, setdata] = useState({
        name:"",
        email:"",
        contact:"",
        address:""
    });
  const dispatch=useDispatch();
  const history=useHistory();
    const inputChangeHandler=(e)=>{

        const {name,value}=e.target;
        console.log(name,value);
    setdata({...data,[name]:value});
    }

  const handleForm=(e)=>{
    e.preventDefault();

    dispatch(addUser(data))
    
    history.push('/')

   
    
  }
  
    return (
       <Fragment>

<div  className="my-5" style={{ width: "50%",margin:"0 auto",paddingTop:"10%"}}>
          <form onSubmit={handleForm} >
             
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" name="name" id="name" value={data.name} onChange={inputChangeHandler} autoComplete="new-password"  placeholder="Enter Name"/>
  </div>

  <div className="form-group">
    <label htmlFor="address">Address</label>
    <input type="text" className="form-control" name="address" value={data.address} onChange={inputChangeHandler} autoComplete="new-password" id="address"  placeholder="Enter address"/>
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" className="form-control" name="email" value={data.email} onChange={inputChangeHandler} autoComplete="new-password" id="email"  placeholder="Enter email"/>
  </div>

  <div className="form-group">
    <label htmlFor="contact">Contact</label>
    <input type='number' className="form-control" name="contact" value={data.contact} onChange={inputChangeHandler} autoComplete="new-password" id="contact"  placeholder="Enter mobile no"/>
  </div>
 
  
 
  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>
</div>

       </Fragment>
    )
}

export default Createuser
