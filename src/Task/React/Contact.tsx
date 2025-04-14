// import React from 'react'
// import backimage from "../../assets/graduationcap.png"

import Navbarr from "./Navbarr"
import Carddd from "./Carddd"

function Contact() {
  return (
    <>
    <Navbarr />
    
    <div>
      {/* <div className=" bg-no-repeat w-500 h-500" style={{backgroundImage:`url(${backimage})`} }></div> */}
      <Carddd
    title="VISIT US"
    description="Sethu Institute of Technology, Pulloor, Kariapatti – 626 115, Virudhunagar District, Tamilnadu, INDIA."
    />
     <Carddd
    title="ADMIN OFFICE"
    description="Sethu Institute of Technology, Pulloor, Kariapatti – 626 115, Virudhunagar District, Tamilnadu, INDIA."
    />
     <Carddd
    title="CONTACT US"
    description="College:+04566-229706, 99433 67007. Admin Office:+0452-2532215, 99437 67007. Email:admission@sethu.ac.in"
    />
<div className="bg-gray-500 h-170 w-315 mt-10 ml-13">
        <h1 className="text-2xl font-bold font-serif text-white ml-120 p-10">Let’s Talk</h1>
        <p className="text-xl font-normal ml-30 text-white">If you have any questions, please use the e-mail section below. We will respond to your questions right away.</p>
        <p className="ml-50 mt-15"><input className="w-80 h-10 bg-white p-3" type="text" placeholder="Your First Name"/><span><input className="h-10 w-80 bg-white ml-10 p-3" type="text" placeholder="Your Last Name"/></span></p>
        <p className="ml-50 mt-15"><input className="w-80 h-10 bg-white p-3" type="email" placeholder="Email Address"/><span><input className="h-10 w-80 bg-white ml-10 p-3" type="number" placeholder="Enter Your Phone Number"/></span></p>
        <p className="ml-50 mt-15"><textarea name="Address" placeholder="Message" className="bg-white h-30 w-170 p-3" /></p>
        <button className="bg-yellow-400 text-blue-900 p-5 ml-120 mt-10">Send Message</button>
</div>


<footer className="bg-blue-900 h-60 mt-10">
        <div>
            <h1 className="text-white font-bold font-serif text-3xl ml-20 p-5">SIT</h1>
            <p className="ml-30 text-white">Autonomous, Accreditation, Affiliated to Anna University, Experienced Professors, Excellent Placements, Eco-friendly environment.</p>
            {/* <p>admission@sethu.ac.in</p> */}
            <p className="ml-30 text-white">99433 67007</p>
            <p className="ml-30 text-white">Pullor,kariapati -626 115, Virudhunagar District, Tamil Nadu, India</p>
        </div>
        <button className="bg-yellow-400 text-blue-900 p-3 ml-150 mt-5 hover:rounded-2xl hover:bg-white hover:text-red-800 hover:text-xl hover:font-bold active:text-blue-950 active:bg-amber-300"  >Apply Now</button>
    </footer>

    </div>
    </>
  )
}

export default Contact