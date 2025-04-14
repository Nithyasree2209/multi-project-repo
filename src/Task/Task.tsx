// import React from 'react'
import Card from "../Card" 
import images from "../assets/html.png"
import image from "../assets/css.png"
// import js from "../assets/js.png"
import tail from "../../src/assets/tailwind.jpg"
import rect from "../assets/react.png"
function Task() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
    <Card
    title="HTML"
    image={images}
    description="Create a student registration form using HTML."
    buttonText="View"
    buttonLink="/html"
    bgColor="bg-white"
    textColor="text-gray-900"
  />
    <Card
        title="CSS"
        image={image}
        description="create a student registration form using HTML and CSS."
        buttonText="View"
        buttonLink="/css"
        bgColor="bg-white"
        textColor="text-gray-900"
      />
        <Card
        title="Tailwind"
        image={tail}
        description="create a student details using Tailwind."
        buttonText="View"
        buttonLink="/Homeeee"
        bgColor="bg-white"
        textColor="text-gray-900"
      />
       <Card
        title="React"
        image={rect}
        description="create a simple webpage using REACT."
        buttonText="View"
        buttonLink="/homeee"
        bgColor="bg-white"
        textColor="text-gray-900"
      />
      
      </div>
  )
}

export default Task