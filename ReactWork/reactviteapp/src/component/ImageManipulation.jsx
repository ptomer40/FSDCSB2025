import React, { useState } from 'react'
import cat from './cat3.png';
function ImageManipulation() {
    const[imgHeight,setImageHeight]=useState(200);
    const[imgWidth,setImageWidth]=useState(200);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
    const[imgAngle,setImgAngle]=useState(0);

    function increaseHeight(){
        setImageHeight(imgHeight+10);
    }

    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }

    function imageRotate(){
        setImgAngle(imgAngle+30);
    }

  return (
    <div>
        <h2>ImageManipulation</h2>
        <div style={{border:'1px solid green', height:'450px', width:'350px', margin:'0px auto'}}>
            <img src={cat} height={imgHeight} width={imgWidth} alt='cat image' style={{paddingTop:'70px', paddingLeft:'70px', backgroundColor:`rgb(${red},${green},${blue})`, transform:`rotate(${imgAngle}deg)`}} />
        </div>
        <div>
            <button onClick={increaseHeight}>Increase Height</button>

            <button>Decrease Height</button>
            <button onClick={()=>setImageWidth(imgWidth+15)}>Increase Width</button>
            <button onClick={changeBGColor}>ChangeBgColor</button>
            <button onClick={imageRotate}>Image Rotate</button>
        <div>
            <h2 style={{color:'cyan', backgroundColor:'red'}}>Image height:{imgHeight}</h2>
        <h2 style={{color:'cyan', backgroundColor:'red'}}>Image Width:{imgWidth}</h2>
        
        </div>
        
        </div>
        
        
        </div>
  )
}

export default ImageManipulation