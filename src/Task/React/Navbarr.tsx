import { Link } from "react-router-dom";
import image from "../../assets/sitlogo.png";
import images from "../../assets/graduationcap.png";

function Navbarr() {
  return (
    <div>
      <img className="h-25 w-25 d-flex inline-block mt-0 " src={image} alt="SIT Logo" />
      <div className="w-140 inline-block">
        <h2 className="text-blue-800 text-3xl font-serif d-flex">SETHU INSTITUTE OF TECHNOLOGY</h2>
        <p className="text-black text-1xl">AN AUTONOMOUS INSTITUTION | Accredited with 'A++' grade by NAAC</p>
        <p className="text-black text-1xl">Permanently Affiliated to Anna University, Chennai and Approved by AICTE - New Delhi</p>
      </div>
      <img className="h-40 w-40 inline-block ml-20" src={images} alt="Graduation Cap" />
      <div className="inline-block">
        <h4 className="text-blue-800 text-2xl">"A Gateway to Knowledge and Success"</h4>
        <h2 className="text-blue-800 text-3xl">Counselling Code - <span className="text-white bg-orange-500">4917</span></h2>
      </div>

      {/* Apply Now Button */}
      {/* <div className="text-center my-4">
        <Link
          to="/Studentform"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-800 transition duration-300"
        >
          Apply Now
        </Link>
      </div> */}
       {/* <li>
           <Link to="/information" className="text-grey-800 hover:text-white hover:bg-blue-900 p-4 m-3 active:text-yellow-400 hover:underline decoration-1 underline-offset-10 hover:border-2 border-white" >Information Center</Link>
        </li> */}

      <nav className="bg-yellow-400 font-serif w-337">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li><Link to="/homeee" className="text-grey-800 hover:text-white hover:bg-blue-900 p-3 m-4 ml-7 active:text-yellow-400 hover:underline decoration-1 underline-offset-10 hover:border-2 border-white">Home</Link></li>
              <li><Link to="/coursesoffered" className="text-grey-800 hover:text-white hover:bg-blue-900 p-3 m-4 ml-5 active:text-yellow-400 hover:underline decoration-1 underline-offset-10 hover:border-2 border-white">Course Offered</Link></li>
              <li><Link to="/eligibility" className="text-grey-800 hover:text-white hover:bg-blue-900 p-3 m-4 ml-5 active:text-yellow-400 hover:underline decoration-1 underline-offset-10 hover:border-2 border-white">Eligibility Criteria</Link></li>
              <li><Link to="/facilities" className="text-grey-800 hover:text-white hover:bg-blue-900 p-3 m-4 ml-5 active:text-yellow-400 hover:underline decoration-1 underline-offset-10 hover:border-2 border-white">Facilities</Link></li>
              <li><Link to="/gallery" className="text-grey-800 hover:text-white hover:bg-blue-900 p-3 m-4 ml-5 active:text-yellow-400 hover:underline decoration-1 underline-offset-10 hover:border-2 border-white">Gallery</Link></li>
              <li><Link to="/information" className="text-grey-800 hover:text-white hover:bg-blue-900 p-3 m-4 ml-5 active:text-yellow-400 hover:underline decoration-1 underline-offset-10 hover:border-2 border-white">Information Center</Link></li>
              <li><Link to="/contact" className="text-grey-800 hover:text-white hover:bg-blue-900 p-3 m-4 ml-5 active:text-yellow-400 hover:underline decoration-1 underline-offset-10 hover:border-2 border-white">Contact Us</Link></li>
              {/* <li><Link to="/Studentform" className="text-grey-800 hover:text-white hover:bg-blue-900 p-4">Form</Link></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarr;

