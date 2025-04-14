// import React from 'react'

import Navbarr from "./Navbarr"
import Carddd from "./Carddd"
import { useNavigate } from "react-router-dom";

function Information() {
  const navigate = useNavigate();
  const handleApplyNow = (course: string) => {
    navigate("/studentform", { state: { selectedCourse: course } });
  };

  return (
    <>
    <div>
    <Navbarr />

    <Carddd
    title="Kalavasal"
    description="Madurai Multipurpose Social Service Society (MMSSS) Sancta Maria, 73, By-Pass Road, Chockalinga Nagar, Madurai - 625 016. Ph: 99445 51673, 99522 62957"
    />
     <Carddd
     title="Thirumangalam"
    description="463/8, NR complex, 1st floor, madurai road, thirumangalam-625706. Ph: 91507 25908, 97872 45143, 88706 66945"
    />
     <Carddd
     title="Aruppukottai"
    description="7-1-172 C-2,Muslim Bazaar, Opposite To Meera Hospital, Aruppukottai. Ph: 94435 70159, 98944 38835"
    />
     <Carddd
     title="Melur"
    description="1st Floor,Diamond Jubilee,Building Opp to Melur, Sub Court. Ph: 99524 54678, 97895 27616"
    />
     <Carddd
     title="Sivagangai"
    description="Meena Driving School(Upstairs), 108 Madurai Road, Sivaganai. Ph: 91714 09899, 88839 25991, 97906 16139"
    />
     <Carddd
     title="Kadayanallur & Tenkasi"
    description="420, Main bazaar, Hithayathul Islam Hr. Sec. School(Opp), Kadayanallur. Ph: 94864 81211, 96003 74833"
    />
    <Carddd
     title="Kariapatti"
    description="SMN Complex, Opp.To Bus Stand, Kariapatti. Ph: 98942 35140, 86672 00689, 82486 01974"
    />
    <Carddd
     title="Paramakudi"
    description="12/338, Bagathsinghsalai, Opp. to Sourashtra School, Madurai- Rameswaram Main Road, Paramakudi. Ph: 9688023572"
    />
    <Carddd
     title="Tirunelveli & Kovilpatti"
    description="37/2/1-D, Melapalayam Roundana, Ambai Road, Tirunelveli. Ph: 90038 96805, 94435 54983"
    />
    <Carddd
    title="Goripalayam"
    description="Ph: 99449 62060, 94420 91918, 98422 96902"
    />
    <Carddd
     title="Ramanathapuram"
    description="Ph: 94435 54983, 94436 08820, 90037 25484"
    />
     <Carddd
     title="Anna Nagar"
    description="Ph: 98426 37695, 97916 94494"
    />
     <Carddd
     title="Thirunagar"
    description="Ph: 96295 39865, 96293 20273"
    />
     <Carddd
     title="K.Pudhur"
    description="Ph: 99423 54525, 94437 95887"
    />
     <Carddd
     title="Villapuram"
    description="Ph: 97904 42812, 97156 78596"
    />
    <Carddd
     title="Sivakasi"
    description="Ph: 97903 97893, 99940 45939"
    />
    <Carddd
     title="Chekkanoorani & Usilampatti"
    description="Ph: 95977 27770, 89403 10054"
    />
    <Carddd
     title="Virudhunagar"
    description="Ph: 98941 36672, 95974 71182"
    />
    
     <Carddd
     title="Sattur"
    description="Ph: 9791248375, 77086 10611"
    />
     <Carddd
     title="M.G.Nagar"
    description="Ph: 91714 09899"
    />  
     <Carddd
     title="Srivilliputhur & Rajapalayam"
    description="Ph: 70106 66866, 95858 58562"
    />
     <Carddd
     title="Karaikudi & Devakottai"
    description="Ph: 90470 81311, 93604 92851"
    />    
    <Carddd
    title="Theni & Periyakulam"
    description="Ph: 99445 51673, 99522 6295"
    />

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

export default Information