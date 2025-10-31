import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Gallery from './component/Gallery'
import StateHandling from './component/StateHandling'

function App() {
 

  return (
    <div className='container'>
      <h2>Welcome to react vite</h2>
      {/* <Gallery /> */}
      
      <StateHandling />
     
    </div>
  )
}

export default App
