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
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'
import MainLayout from './pages/MainLayout'
function App() {
 const[data,setData]=useState();

  return (
    <div>
      {/* <h2>Welcome to react vite</h2> */}
      {/* <Gallery /> */}
      
      {/* <StateHandling /> */}

      {/* <ImageManipulation /> */}

      <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login logData={data} />}></Route>
      <Route path='/register' element={<Registration regData={setData}/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/' element={<MainLayout/>} />
     </Routes>

      </BrowserRouter>
     <h2>
      {JSON.stringify(data)}
     </h2>
    </div>
  )
}

export default App
