import React, { useState } from 'react'

function Registration({regData}) {
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();

  function getData(e){
    e.preventDefault();
  //  alert("Hiii"+name+email+password);
   const data={
    name,
    email,
    password
   }
   regData(data);
   console.log(data);
  }
  return (
    <div>
      <h2>Registration Form</h2>

       <form>
        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={getData} class="btn btn-primary">Register</button>
</form>    
    </div>
  )
}

export default Registration