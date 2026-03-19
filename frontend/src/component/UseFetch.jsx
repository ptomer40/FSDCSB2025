import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UseFetch() {
  const [data, setData] = useState([])
  const[loader,setLoader]=useState(false);

  async function getData(){
    try{
    setLoader(true)
// alert("Hiiiii......")
const serverData=await fetch('http://localhost:4004/data') 
               const jsonData=await serverData.json();
               //console.log()
               setData(jsonData.msg.products);
    }catch(e){
      console.log(e)
    }
    finally{
      setLoader(false)
    }

  }


  function cartItem(ele){
    alert(ele)
  }

  return (
    <>
    <h2>Fetching Data from Node Server</h2> 

    {
      data.map((ele)=>(
        <div style={{border:'2px solid red'}}>

         <h2> {ele.id}:{ele.title}</h2>
         <h3>{ele.description}</h3>
         <h2>{ele.price}</h2>
         <h2>{ele.rating}</h2>
         <button onClick={()=>cartItem(ele)}>Add to Cart</button>
        </div>
      ))
    }
    <button onClick={getData}>FetchData</button> 
    {
      loader?(<h2 style={{color:'brown', backgroundColor:'white'}}>Data is fetching...</h2>):("")
    }
{/* {JSON.stringify(data)} */}
    </>
  )
}

export default UseFetch
