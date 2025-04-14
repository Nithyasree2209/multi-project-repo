// import React from 'react'
// import { ServerRouter } from "react-router-dom"
import girl from "../src/assets/FPGirl.png"

function Home() {
  return (
    <div className="flex items-center space-x-8">
    <div className="w-1/2">
        <img src={girl} className="w-140"/>
    </div>
    <div className="w-1/2">
      <p  className="text-2xl font-semibold font-serif">Name :<span className="font-normal">Nithya sree .V</span></p>
      <p className="text-2xl font-semibold font-serif">College Name :<span className="font-normal">Sethu Institute of Technology</span></p>
      <p className="text-2xl font-semibold font-serif">Department :<span className="font-normal">Agriculture Engineering</span></p>
    </div>
    </div>
  )
}

export default Home