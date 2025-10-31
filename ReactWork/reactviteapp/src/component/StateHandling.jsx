import { useState } from "react"
import React from 'react'

function StateHandling() {
const [counter,setCounter]=useState(20);

function increaseCounterValue(){
    setCounter(counter+2);
}

  return (
    <div>
        <h2>Counter value={counter}</h2>
        <button onClick={increaseCounterValue}>Incrment Counter</button>
          <button onClick={()=>setCounter(counter-2)}>Decrease Counter</button>
    </div>
  )
}

export default StateHandling