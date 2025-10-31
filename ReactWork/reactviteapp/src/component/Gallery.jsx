import React from 'react'
import Profile from './Profile'

function Gallery() {
  
  const student=
  [{
    pic:'url',
    myname:"Rahul",
    branch:"CS",
    section:"B",
    college:"ABES Engineering College"

  },
{    
    pic:'',
    myname:"Vansh",
    branch:"CS",
    section:"B",
    college:"ABES Engineering College"

  },
  {   pic:'',
    myname:"Ankit",
    branch:"CS",
    section:"B",
    college:"ABES Engineering College"

  },
  { 
     pic:'',
    myname:"Ansh",
    branch:"CS",
    section:"B",
    college:"ABES Engineering College"

  }
]

  return (
    <div>
      {/* <div> <Profile name="Rahul Kumar" branch="CS" section="B" college="ABES Engineering College" /></div>
      <div><Profile name="Vansh Tomar" branch="CS" Section="B" college="ABES Engineering College"  /></div>
     <div><Profile name="Ansh Tomar" branch="CS" Section="B" college="ABES Engineering College"  /></div>
      */}
      {/* <Profile data={student} /> */}

      {
        student.map((ele,index)=>(
          <Profile data={ele} key={index} />
        ))
      }
    </div>

  )
}

export default Gallery