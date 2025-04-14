// import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbarr from "./Navbarr"
import library from "../../assets/library.jpg"
import resident from "../../assets/resident.jpg"
import sports from "../../assets/sports.jpg"
import transport from "../../assets/transport.jpg"

function Facilities() {
    const navigate = useNavigate();
    const handleApplyNow = (course: string) => {
        navigate("/studentform", { state: { selectedCourse: course } });
      };
  return (
    <><Navbarr />
    <div>
    <h1 className="bg-blue-950 text-white font-bold font-serif inline-block p-5 text-2xl ml-70 mt-5">CENTRAL LIBRARY</h1>

<div className="flex items-center space-x-8">
    
    <div className="w-1/2">
        <img src={library} className="w-170 mt-5 ml-20"/>
    </div>
    <div className="w-1/2">
      <p  className="text-2xl font-semibold font-serif bg-yellow-400 text-blue-950 p-2 inline-block w-80 ml-40"><span className="ml-7">CENTRAL LIBRARY</span></p>
      <ul className="bg-blue-950 text-white inline-block ml-40 w-80 h-100">
                <li className="mt-5 ml-10 list-disc">AICTE-INDEST Consortium (Year 2007 onwards)</li>
                <li className="mt-5 ml-10 list-disc">NPTEL (Year 2009 onwards)</li>
                <li className="mt-5 ml-10 list-disc">DELNET (Year 2003 onwards)</li>
                <li className="mt-5 ml-10 list-disc">British Council Library (Year 2009 onwards)</li>
                <li className="mt-5 ml-10 list-disc">AIRC-American Information Resource Centre (Year 2009 onwards)</li>
                <li className="mt-5 ml-10 list-disc">IASLIC-Indian Association of Special Libraries 
                    & Information Centre (Year 2009 onwards)</li>
        </ul>
    </div>
    </div>
    <div className="ml-40 font-light mt-10 w-250">We are providing service to students and Faculty with automated infrastructural facilities. With the State-of-the art equipment, we have a huge collection of information, which are available in digital format including audio/video, online courses apart from books and periodicals.</div>
    <h1 className="bg-blue-950 text-white font-bold font-serif inline-block p-5 text-2xl ml-70 mt-5">HALL OF RESIDENCE</h1>
    <div className="flex items-center space-x-8">
    
    <div className="w-1/2">
        <img src={resident} className="w-170 mt-5 ml-20"/>
    </div>
    <div className="w-1/2">
      <p  className="text-2xl font-semibold font-serif bg-yellow-400 text-blue-950 p-2 inline-block w-90 ml-40"><span className="ml-5">RESIDENCE FEATURES</span></p>
      <ul className="bg-blue-950 text-white inline-block ml-40 w-90 h-93">
                <li className="mt-5 ml-10 list-disc">Special care is taken to ensure hygienic foods.</li>
                <li className="mt-5 ml-10 list-disc">Uninterrupted power supply</li>
                <li className="mt-5 ml-10 list-disc">A wide variety of dishes are available.</li>
                <li className="mt-5 ml-10 list-disc">4 Students per Room</li>
                <li className="mt-5 ml-10 list-disc">Mineral water is provided</li>
                <li className="mt-5 ml-10 list-disc">Inside hostel Store facilities are available</li>
                <li className="mt-5 ml-10 list-disc">TV Hall, Yoga Hall, Gym are available</li>
        </ul>
    </div>
    </div>
    <div className="ml-40 font-light mt-10 w-250">Separate hall of residences for both boys and girls with excellent infrastructural facilities for the cosy and comfortable staying of the inmates.</div>
    <h1 className="bg-blue-950 text-white font-bold font-serif inline-block p-5 text-2xl ml-85 mt-5">SPORTS</h1>
    <div className="flex items-center space-x-8">
    
    <div className="w-1/2">
        <img src={sports} className="w-170 mt-5 h-130 ml-20"/>
    </div>
    <div className="w-1/2">
      <p  className="text-2xl font-semibold font-serif bg-yellow-400 text-blue-950 p-2 inline-block w-80 ml-40"><span className="ml-25">SPORTS</span></p>
      <ul className="bg-blue-950 text-white inline-block ml-40 w-80 h-120">
                <li className="mt-5 ml-10 list-disc">Our students are encouraged to participate in National level, Inter collegiate level and Open tournaments</li>
                <li className="mt-5 ml-10 list-disc">Football</li>
                <li className="mt-5 ml-10 list-disc">A wide variety of dishes are availableBasket Ball Ground</li>
                <li className="mt-5 ml-10 list-disc">Volleyball</li>
                <li className="mt-5 ml-10 list-disc">Hockey</li>
                <li className="mt-5 ml-10 list-disc">Cricket</li>
                <li className="mt-5 ml-10 list-disc">Kabadi</li>
                <li className="mt-5 ml-10 list-disc">Hand Ball &</li>
                <li className="mt-5 ml-10 list-disc">Athletics</li>
        </ul>
    </div>
    </div>
    <div className="ml-40 font-light mt-10 w-250">SIT has stupendous sports facilities, both indoor and outdoor, for maintaining students’ physical fitness and health. Sethu Sports Village is set up with a standard 400 meter track with drainage system.</div>

    <h1 className="bg-blue-950 text-white font-bold font-serif inline-block p-5 text-2xl ml-85 mt-5">TRANSPORT</h1>
    <div className="flex items-center space-x-8">
    
    <div className="w-1/2">
        <img src={transport} className="w-170 mt-5 h-130 ml-20"/>
    </div>
    <div className="w-1/2">
      <p  className="text-2xl font-semibold font-serif bg-yellow-400 text-blue-950 p-2 inline-block w-80 ml-40"><span className="ml-18">TRANSPORT</span></p>
      <ul className="bg-blue-950 text-white inline-block ml-40 w-80 h-35">
                <li className="mt-5 ml-10 list-disc">Highly Comfortable Buses</li>
                <li className="mt-5 ml-10 list-disc">Speed Control Meter is installed in all buses</li>
        </ul>
    </div>
    </div>
    <div className="ml-40 font-light mt-10 w-250">The transport section of the college ensures the comfort and convenience of students from college to different destinations, covering almost 60kms in and around Madurai,Virudhunagar,Dindugal. To meet such demands it operates a fleet of 75 buses. For hostler the transport facility is provided upto 100 kms during weekends.</div>
    <div className="ml-40 font-light mt-5 w-250">Special buses are available after college hours for the convenience of the staff and students involved in Research and other activities.</div>
    <footer className="bg-blue-900 h-60 mt-10">
        <div>
            <h1 className="text-yellow-500 font-bold font-serif text-3xl ml-20 p-5 mt-3">SIT</h1>
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

export default Facilities