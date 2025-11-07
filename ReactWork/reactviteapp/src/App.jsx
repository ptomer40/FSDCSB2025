import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import Gallery from './component/Gallery'
import StateHandling from './component/StateHandling'
import ImageManipulation from './component/ImageManipulation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
function App() {
 

  return (
    <div>
      {/* <h2>Welcome to react vite</h2> */}
      {/* <Gallery /> */}
      
      {/* <StateHandling /> */}

      {/* <ImageManipulation /> */}

      <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login />}></Route>
     </Routes>

      </BrowserRouter>
     
    </div>
  )
}

export default App
