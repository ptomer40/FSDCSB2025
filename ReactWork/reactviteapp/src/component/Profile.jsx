import React from 'react'
import './profile.css';
function Profile({data}) {
  return (
    <div className='parent'>
        <h2>Profile Page</h2>
        <img src={data.pic} height={100} width={100} alt='' />
        <h3>Name: {data.myname}</h3>
        <h3>Branch:{data.branch}</h3>
        <h3>Section:{data.section}</h3>
        <h3>College:{data.college}</h3>
    </div>
  )
}

export default Profile