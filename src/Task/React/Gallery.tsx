import Image from "./Image"
// import a from "../../assets/1.jpg"
import { useNavigate } from "react-router-dom";
import b from "../../assets/2.jpg"
// import c from "../../assets/3.jpg"
import d from "../../assets/4.jpg"
import e from "../../assets/5.jpg"
import f from "../../assets/6.jpg"
import g from "../../assets/7.jpg"
import h from "../../assets/8.jpg"
import i from "../../assets/9.jpg"
import j from "../../assets/10.jpg"
import k from "../../assets/11.jpg"
import l from "../../assets/12.jpg"
import m from "../../assets/13.jpg"
import n from "../../assets/14.jpg"
import o from "../../assets/15.jpg"
import p from "../../assets/16.jpg"
import q from "../../assets/17.jpg"
import r from "../../assets/18.jpg"
import s from "../../assets/19.jpg"
import t from "../../assets/20.jpg"
import u from "../../assets/21.jpg"
import v from "../../assets/22.jpg"
import w from "../../assets/23.jpg"
import x from "../../assets/24.jpg"
import y from "../../assets/25.jpg"
import z from "../../assets/26.jpg"
import a1 from "../../assets/27.jpg"
import a2 from "../../assets/28.jpg"
import a3 from "../../assets/29.jpg"
import a4 from "../../assets/30.jpg"
import mine from "../../assets/mine.jpeg"
import lab from "../../assets/lab.jpg"
// import audi from "../../assets/audi.webp"
import Navbarr from "./Navbarr"

function Gallery() {
  const navigate = useNavigate();
  const handleApplyNow = (course: string) => {
    navigate("/studentform", { state: { selectedCourse: course } });
  };

  return (
    <>
    <Navbarr />
    <div>
        {/* <Image
        imageSrc={a}        
        /> */}
        <Image
        imageSrc={b}        
        />
        {/* <Image
        imageSrc={c}        
        /> */}
        <Image
        imageSrc={d}        
        />
        <Image
        imageSrc={e}        
        />
        <Image
        imageSrc={f}        
        />
        <Image
        imageSrc={g}        
        />
        <Image
        imageSrc={h}        
        />
        <Image
        imageSrc={i}        
        />
        <Image
        imageSrc={j}        
        />
        <Image
        imageSrc={k}        
        />
        <Image
        imageSrc={l}        
        />
        <Image
        imageSrc={m}        
        />
        <Image
        imageSrc={n}        
        />
        <Image
        imageSrc={o}        
        />
        <Image
        imageSrc={p}        
        />
        <Image
        imageSrc={q}        
        />
        <Image
        imageSrc={r}        
        />
        <Image
        imageSrc={s}        
        />
        <Image
        imageSrc={t}        
        />
        <Image
        imageSrc={u}        
        />
        <Image
        imageSrc={v}        
        />
        <Image
        imageSrc={w}        
        />
        <Image
        imageSrc={x}        
        />
        <Image
        imageSrc={y}        
        />
        <Image
        imageSrc={z}        
        />
        <Image
        imageSrc={a1}        
        />
        <Image
        imageSrc={a2}        
        />
        <Image
        imageSrc={a3}        
        />
        <Image
        imageSrc={a4}        
        /> 
        <Image
        imageSrc={lab}        
        /> 
        {/* <Image
        imageSrc={audi}        
        />  */}
        <Image
        imageSrc={mine}        
        /> 
        {/* <Image
        imageSrc={a5}        
        /> */}
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

export default Gallery