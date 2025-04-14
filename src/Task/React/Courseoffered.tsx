// import React from 'react'
// import Card from "../../Card" 
import { useNavigate } from "react-router-dom";
import Cardd from "./Cardd"
import Navbarr from "./Navbarr"
import civil from "../../assets/civil.png"
import mech from "../../assets/mech.png"
import eee from "../../assets/eee.png"
import cs from "../../assets/cs.png"
import ai2 from "../../assets/ai2.jfif"
import ece from "../../assets/ece.png"
import it from "../../assets/it.png"
import agri from "../../assets/agri.jfif"
import bm from "../../assets/bm.png"
import csbs from "../../assets/csbs.jfif"
import biotech from "../../assets/biotech.jfif"
import csd from "../../assets/csd.png"
import iot from "../../assets/iot.png"
import security from "../../assets/cyber2.jfif"
import aiml from "../../assets/aiml.jfif"
import chemical from "../../assets/chemical.png"
import cad from "../../assets/cad.png"
import communication from "../../assets/communication.png"
import pe from "../../assets/pe.jfif"
import structural from "../../assets/structural.png"
function Courseoffered() {
  const navigate = useNavigate();
  const handleApplyNow = (course: string) => {
    navigate("/studentform", { state: { selectedCourse: course } });
  };

  return (
    <><Navbarr/>
    <div><h1>UG COURSES</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
  <Cardd
  imageSrc={civil}
  description="CIVIL ENGINEERING"
  />
  <Cardd
  imageSrc={mech}
  description="MECHANICAL ENGINEERING"
  />
  <Cardd
  imageSrc={ai2}
  description="ARTIFICIAL INTELLIGENCE AND DATA SCIENCE ENGINEERING"
  />
  <Cardd
  imageSrc={eee}
  description="ELECTRICAL AND ELECTRONICS ENGINEERING"
  />
  <Cardd
  imageSrc={cs}
  description="COMPUTER SCIENCE ENGINEERING"
  />
  <Cardd
  imageSrc={ece}
  description="ELECTRONICS AND COMMUNICATION ENGINEERING"
  />
  <Cardd
  imageSrc={it}
  description="INFORMATION TECHNOLOGY"
  />
  <Cardd
  imageSrc={agri}
  description="AGRICULTURE ENGINEERING"
  />
  <Cardd
  imageSrc={bm}
  description="BIO-MEDICAL ENGINEERING"
  />
    <Cardd
  imageSrc={csbs}
  description="COMPUTER SCIENCE AND BUSINESS SYSTEM ENGINEERING"
  />
    <Cardd
  imageSrc={biotech}
  description="BIO-TECHNOLOGY"
  />
    <Cardd
  imageSrc={iot}
  description="COMPUTER SCIENCE AND ENGINEERING (INTERNET OF THINGS)"
  />
    <Cardd
  imageSrc={security}
  description="COMPUTER SCIENCE AND ENGINEERING (CYBER SECURITY)"
  />
    <Cardd
  imageSrc={csd}
  description="COMPUTER SCIENCE AND DESIGN ENGINEERING"
  />
  <Cardd
  imageSrc={aiml}
  description="COMPUTER SCIENCE AND ENGINEERING(ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING)"
  />
    <Cardd
  imageSrc={chemical}
  description="CHEMICL ENGINEERING"
  />



<h1>PG COURSES</h1>



    <Cardd
  imageSrc={cad}
  description="CAD / CAM ENGINEERING"
  />
    <Cardd
  imageSrc={communication}
  description="COMMUNICATION SYSTEM ENGINEERING"
  />

<Cardd
  imageSrc={cs}
  description="COMPUTER SCIENCE AND ENGINEERING"
  />
    <Cardd
  imageSrc={pe}
  description="POWER ELECTRONICS AND DRIVES ENGINEERING"
  />
    <Cardd
  imageSrc={structural}
  description="STRUCTURAL ENGINEERING"
  /> 
  </div>
  <footer className="bg-blue-900 h-60 mt-10">
        <div>
            <h1 className="text-yellow-500 font-bold font-serif text-3xl ml-20 mt-3 p-5">SIT</h1>
            <p className="ml-30 text-white">Autonomous, Accreditation, Affiliated to Anna University, Experienced Professors, Excellent Placements, Eco-friendly environment.</p>
            {/* <p>admission@sethu.ac.in</p> */}
            <p className="ml-30 text-white">99433 67007</p>
            <p className="ml-30 text-white">Pullor,kariapati -626 115, Virudhunagar District, Tamil Nadu, India</p>
        </div>
        <button className="bg-yellow-400 text-blue-900 p-3 ml-150 mt-5 hover:rounded-2xl hover:bg-white hover:text-red-800 hover:text-xl hover:font-bold active:text-blue-950 active:bg-amber-300" onClick={() => handleApplyNow("")} >Apply Now</button>
    </footer>
    </div>
    </>
   
  )
}

export default Courseoffered