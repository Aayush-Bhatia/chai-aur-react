import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200 "
    style={{background: color}}
    >

      <div className=" fixed flex flex-wrap bottom-12
      justify-center  inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center 
        gap-3 shadow-lg bottom-12 bg-white px-3 py-2 rounded-3xl"
        >
          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}>red</button>
          <button 
          onClick={()=>setColor("skyblue")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "skyblue"}}>skyblue</button>
          <button 
          onClick={()=>setColor("green")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}>green</button>
          <button 
          onClick={()=>setColor("orange")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "orange"}}>orange</button>
          <button 
          onClick={()=>setColor("black")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "black"}}>black</button>
          <button 
          onClick={()=>setColor("purple")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "purple"}}>purple</button>
          <button 
          onClick={()=>setColor("grey")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "grey"}}>grey</button>
          <button 
          onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}>blue</button>
          <button 
          onClick={()=>setColor("yellow")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "yellow"}}>yellow</button>
          <button 
          onClick={()=>setColor("pink")}
          className='outline-none px-4 py-1
          rounded-full text-white shadow-lg'
          style={{backgroundColor: "pink"}}>pink</button>
        </div>
        
      </div>
      
    </div>
    <h1>tailwind ni chlri bhaiii</h1>
    
    </>
  )
}

export default App
