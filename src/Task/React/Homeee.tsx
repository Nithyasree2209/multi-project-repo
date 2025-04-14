// import React from 'react'
// import { FigureCaption } from "react-bootstrap"
import backimage from "../../assets/bg_image.png"
import ullogo from "../../assets/sitlogo.png"
import chairman from "../../assets/chairman.png"
import ceo from "../../assets/ceo.png"
import jceo from "../../assets/jceo.png"
import principal from "../../assets/principal.png"
import da from "../../assets/da.png"
import Navbarr from "./Navbarr"
import { useNavigate } from "react-router-dom";

function Homee() {
    const navigate = useNavigate();
    const handleApplyNow = (course: string) => {
        navigate("/studentform", { state: { selectedCourse: course } });
      };

  return (
    <><Navbarr/>
    <div className="  bg-gradient-to-br from-blue-900 via-white to-white">
         <div className=" d-flex inline-block w-110 mt-40 ml-20 ">
            <h1 className="text-white text-5xl mt-5">ARE YOU READY TO APPLY?</h1>
            <p className="text-white text-3xl mt-5">Submit enquiry to get the details from our staff!</p>
            <button className="bg-yellow-400 text-blue-900 p-3 mt-5 hover:rounded-2xl hover:bg-white hover:text-red-800 hover:text-xl hover:font-bold active:text-blue-950 active:bg-amber-300" onClick={() => handleApplyNow("")} >Apply Now</button>
        </div>
        {/* <div className=" bg-no-repeat d-flex inline-block ml-180 w-150 h-100" style={{backgroundImage:`url(${backimage})`}}></div> */}
    <img className="d-flex inline-block w-90 h-90 ml-200" src={backimage} />

{/* card 1 */}
    <a href="#" className=" max-w-sm p-6 ml-13 bg-orange-300 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 d-flex inline-block">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NBA</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Various Programmes are continually accredited by National Board of Accreditation (NBA), New Delhi.</p>
    </a>


    {/* card 2*/}
    <a href="#" className=" max-w-sm p-6 ml-13 bg-pink-200 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 d-flex inline-block">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NAAC</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Accredited by National Assessment and Accreditation Council (NAAC) With ‘A++’ Grade.</p>
    </a>


    {/* card 3*/}
    <a href="#" className=" max-w-sm p-6 ml-13 bg-orange-300 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 d-flex inline-block">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NBA</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Various Programmes are continually accredited by National Board of Accreditation (NBA), New Delhi.</p>
    </a>


    <div className="d-flex">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/dHobwyKlIXI?si=mm7gCyZGCR8Drfx8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="mt-10 ml-30 inline-block"></iframe>
    <div className="d-flex inline-block w-100 ml-20 ">
    <h2 className="font-bold font-serif text-xl mt-10">SETHU INSTITUTE OF TECHNOLOGY</h2>
    <h1 className="font-bold text-2xl mt-2">Why SIT ?</h1>
    <p className="mt-2">Autonomous, Accreditation, Affiliated to Anna University, Experienced Professors, Excellent Placements, Eco-friendly environment</p>
    </div>
    </div> 
<div className="bg-blue-900 mt-6 h-255">
    <h2 className="ml-20 text-white mt-10 font-bold font-serif p-5">SETHU INSTITUTE OF TECHNOLOGY</h2>
    <p className="text-white ml-20 text-5xl">Salient Features</p>
    <ul className="list-disc">
        <li className="ml-110 text-white mt-5 ">Approved Institution for NRI / FN / PIO / OCI / CIWGC admissions</li>
        <li className="ml-110 text-white mt-5 ">Various Programmes are continually accredited by National Board of Accreditation (NBA), New Delhi</li>
        <li className="ml-110 text-white mt-5 ">Highest number of placements (Multinational Companies) in South Tamilnadu</li>
        <li className="ml-110 text-white mt-5 ">Ranked under Platinum Category in AICTE-Confederation of Indian Industries Survey for the past 5 years</li>
        <li className="ml-110 text-white mt-5 ">Recognized as Scientific and Industrial Research Organization (SIRO) by the Department of Scientific and Industrial Research (DSIR), Ministry of Science and Technology, India</li>
        <li className="ml-110 text-white mt-5 ">Around 5.6 Crores (INR) grant received for Research from various funding agencies</li>
        <li className="ml-110 text-white mt-5 ">State level Intellectual Property Rights award for 12 patents</li>
        <li className="ml-110 text-white mt-5 ">Innovations and Research awards for students</li>
        <li className="ml-110 text-white mt-5 ">MoUs Signed with Foreign Universities</li>
        <li className="ml-110 text-white mt-5 ">Medical Facilities and 24 hours Ambulance Service</li>
        <li className="ml-110 text-white mt-5 ">International Food Court & Lift Facilities in campus</li>
        <li className="ml-110 text-white mt-5 ">Just 15minutes travel from Madurai International airport to college & Direct flight from Madurai to Sri Lanka, Dubai, Singapore etc. at convenient time</li>
   <img className="ml-10" src={ullogo}/>
    </ul>
    </div>
    <h1 className="font-bold font-serif text-2xl ml-10">SETHU INSTITUTE OF TECHNOLOGY </h1>
    <h1 className="text-6xl ml-10">OUR MANAGEMENT</h1>
    <div>
       <figure className="d-flex inline-block">
        <img className="ml-40 mt-20 " src={chairman}></img>
        <figcaption className="ml-40 mt-3">Founder and Chairman</figcaption>
       </figure>
       <figure className="d-flex inline-block">
        <img className="ml-40 mt-20 w-70 h-50 " src={ceo}></img>
        <figcaption className="ml-52 mt-3">Chief Executive Officer</figcaption>
       </figure>
       <figure className="d-flex inline-block">
        <img className="ml-40 mt-20 w-65 h-50 " src={jceo}></img>
        <figcaption className="ml-50 mt-3">Join Chief Executive Officer</figcaption>
       </figure>
       <figure className="d-flex inline-block">
        <img className="ml-68 mt-20 w-65 h-50 " src={principal}></img>
        <figcaption className="ml-90 mt-3">Principal</figcaption>
       </figure>
       <figure className="d-flex inline-block">
        <img className="ml-40 mt-20 w-65 h-50 " src={da}></img>
        <figcaption className="ml-53 mt-3">Director Administration</figcaption>
       </figure>
       <footer className="bg-blue-900 h-60 mt-10">
        <div>
            <h1 className="text-yellow-500 font-bold font-serif text-4xl mt-3 ml-20 p-5">SIT</h1>
            <p className="ml-30 text-white">Autonomous, Accreditation, Affiliated to Anna University, Experienced Professors, Excellent Placements, Eco-friendly environment.</p>
            {/* <p>admission@sethu.ac.in</p> */}
            <p className="ml-30 text-white">99433 67007</p>
            <p className="ml-30 text-white">Pullor,kariapati -626 115, Virudhunagar District, Tamil Nadu, India</p>
        </div>
        <button className="bg-yellow-400 text-blue-900 p-3 ml-150 mt-5 hover:rounded-2xl hover:bg-white hover:text-red-800 hover:text-xl hover:font-bold active:text-blue-950 active:bg-amber-300" onClick={() => handleApplyNow("")} >Apply Now</button>
    </footer>
    </div>
    </div>
    </>
  )
}

export default Homee