import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useEffect, useState } from 'react'
import Three from "./component/three"
import { Environment, Html } from '@react-three/drei'
import * as THREE from 'three'
import Navbar from './component/Navbar'
import Home from './component/three/Home.jsx'
import Web2d from './component/three/web2d.jsx'
import Avatar from './component/three/Avatar.jsx'
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Experience from './component/three/Experience.jsx'
let Content;
function App() {
  const [login,setlogin]=useState(false)
  const canvasRef = useRef(null)
  useEffect(() => {
    if (canvasRef.current) {
      console.log(canvasRef)
    }
  }, [canvasRef.current])
  if(login){
    Content=<div style={{width:'100vw', height: "94vh" }} id='canvas'>
    <Canvas id='three-canvas-container' ref={canvasRef} shadows>
      {/* 3D  */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canvas" element={<Three />} />
          <Route path='/experience' element={<Experience/>}/>
          {/* <Route path='/avatar' element={<Avatar/>}/> */}
        </Routes>
      </Suspense>
    </Canvas>
  </div>
  }else{
    Content=<div style={{height:'300vh'}} >
      <Web2d />

    </div>
  }
  const onClick =() =>{
    if(login){
      setlogin(false);  
    }else{

      setlogin(true);
    }
  }

  return (
    <>
      <Router>

        <div id='container' style={{width:'100vw'}}
        >
          <div 
          id='navbar'>
            <Navbar/>
          </div >
          <div>
            <button onClick={onClick}>hello</button>
            {Content}  
          </div>
          </div>
        
      </Router>
    </>
  )
}

export default App
