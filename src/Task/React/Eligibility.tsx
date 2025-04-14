// import React from 'react'
import { useNavigate } from "react-router-dom";
import correct from "../../assets/correct.png"
import Navbarr from "./Navbarr"

function Eligibility() {
    const navigate = useNavigate();
    const handleApplyNow = (course: string) => {
        navigate("/studentform", { state: { selectedCourse: course } });
      };

  return (
    <><Navbarr/>
    <div>
        <div className="bg-blue-400 h-20"></div>
        <div className="bg-white h-80"><p className="text-amber-950 text-5xl">SIT <span className="text-amber-600">ELEGIBILITY CRITERIA</span><span><img className="ml-90" src={correct} /></span></p></div>
        <div className="bg-blue-400 h-20"></div>
        <div>
        <div className="bg-red-950 text-white d-flex inline-block ml-50 mt-10 w-40"><p className="p-2 ml-14">ADMISSION CRITERIA</p></div>
        <div className="bg-amber-300 d-flex inline-block ml-10 mt-10 w-90 p-2 h-16">B.E / B.TECH COURSES <p>Admission Eligibility to First Year B.E / B.TECH</p></div>
       <div className="bg-red-950 text-white d-flex inline-block ml-10 w-100 p-2">Minimum Eligibility Marks<p>Minimum Eligibility Marks as per G.O .No. 34
Higher Education (J2)
Department, dated : 26.02.2019</p></div>
        </div>
        <div>
            <h2 className="bg-cyan-950 text-white d-flex inline-block ml-10 p-2 mt-10 w-325"><p className="ml-83 text-xl">Candidates of HSC (Academic) and other Equivalent Examinations</p></h2>
            <table className="border-2 mt-5 ml-10 w-325">
                <tr className="border-2 mt-5">
                    <th className="border-2 p-2">Si.No</th>
                    <th className="border-2 p-2">Community</th>
                    <th className="border-2 p-2">A Pass with Minimum average marks in Mathematics Physics and Chemistry put together</th>
                </tr>
                <tr>
                    <td className="border-2 p-2">1</td>
                    <td className="border-2 p-2">General Category (OC)</td>
                    <td className="border-2 p-2 ">45.00%</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">2</td>
                    <td className="border-2 p-2">Backward Class including Backward Class Muslim</td>
                    <td className="border-2 p-2 ">40.00%</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">3</td>
                    <td className="border-2 p-2">MBC & DNC</td>
                    <td className="border-2 p-2 ">40.00%</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">4</td>
                    <td className="border-2 p-2">SC/SCA/SCT</td>
                    <td className="border-2 p-2 ">40.00%</td>
                </tr>
            </table>
            <h2 className="bg-cyan-950 text-white d-flex inline-block ml-10 p-2 mt-10 w-325"><p className="ml-130 text-xl">Candidates of HSC (Vocational)</p></h2>
            <table className="border-2 mt-5 ml-10">
                <tr className="border-2 mt-5">
                    <th className="border-2 p-2">Si.No</th>
                    <th className="border-2 p-2">Community</th>
                    <th className="border-2 p-2">A Pass with Minimum average marks in any one of Related Subjects (Maths or Physics or Chemistry), Vocational Theory and Practicals put together</th>
                </tr>
                <tr>
                    <td className="border-2 p-2">1</td>
                    <td className="border-2 p-2">General Category (OC)</td>
                    <td className="border-2 p-2 ">45.00%</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">2</td>
                    <td className="border-2 p-2">Backward Class including Backward Class Muslim</td>
                    <td className="border-2 p-2 ">40.00%</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">3</td>
                    <td className="border-2 p-2">MBC & DNC</td>
                    <td className="border-2 p-2 ">40.00%</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">4</td>
                    <td className="border-2 p-2">SC/SCA/SCT</td>
                    <td className="border-2 p-2 ">40.00%</td>
                </tr>
            </table>
            <h2 className="bg-cyan-950 text-white d-flex inline-block ml-10 p-2 mt-10 w-325"><p className="ml-130 text-xl">Vocational Courses prescribede for B.E. / B.Tech. Degree Admission</p></h2>
            <table className="border-2 mt-5 ml-10 w-325">
                <tr className="border-2 mt-5">
                    <th className="border-2 p-2">Group Code</th>
                    <th className="border-2 p-2">Name of the Vocational Subjects</th>
                </tr>
                <tr>
                    <td className="border-2 p-2">421</td>
                    <td className="border-2 p-2">General Machinist</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">422</td>
                    <td className="border-2 p-2">Electrical Machines and Appliances</td>
                </tr>
               
                <tr>
                    <td className="border-2 p-2">423</td>
                    <td className="border-2 p-2">Electronic Equipments</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">424</td>
                    <td className="border-2 p-2">Draughtsman Civil</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">425</td>
                    <td className="border-2 p-2">Auto Mechanic</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">426</td>
                    <td className="border-2 p-2">Textile Technology</td>
                </tr>
            </table>
            <h2 className="bg-cyan-950 text-white d-flex inline-block ml-10 p-2 mt-10 w-325"><p className="ml-40 text-xl">Admission Eligibility to Second Year B.E./B.TECH under Lateral Entry (For Diploma and B.Sc., Candidates)</p></h2>
            <table className="border-2 mt-5 ml-10 w-325">
                <tr className="border-2 mt-5">
                    <th className="border-2 p-2">Community</th>
                    <th className="border-2 p-2">Minimum Eligibility Marks</th>
                </tr>
                <tr>
                    <td className="border-2 p-2">General Category</td>
                    <td className="border-2 p-2">55.00%</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">Backward Class including Backward Class Muslim</td>
                    <td className="border-2 p-2">50.00%</td>
                </tr>
               
                <tr>
                    <td className="border-2 p-2">Most Backward Class and Denotifed Communities</td>
                    <td className="border-2 p-2">45.00%</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">SC/ SCA/ ST</td>
                    <td className="border-2 p-2">Mere pass in the qualifying Examination</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">Full Time Diploma/ B.Sc</td>
                    <td className="border-2 p-2">Overall percentage of marks obtained by the candidate from 1st semester to 6th semester</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">Lateral Entry Diploma</td>
                    <td className="border-2 p-2">Overall percentage of marks obtained by the candidate from 3rd  semester to 6th semester</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">Sandwich Diploma</td>
                    <td className="border-2 p-2">Overall percentage of marks obtained by the candidate from 1st semester to 7th semester excluding the in-plant training marks</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">Part Time Diploma</td>
                    <td className="border-2 p-2">Overall percentage of marks obtained by the candidate from 1st semester to 8th semester</td>
                </tr>
            </table>
            <div className="w-250">
           <h1 className="font-serif font-bold text-2xl text-blue-900 ml-50 mt-10">Note:</h1>
           <ul>
            <li className="ml-60 list-decimal mt-5">When the candidates produce grade certificates, they have to produce the actual marks also otherwise only the minimum marks applicable to the grades in the eligible subjects (Mathematics, Physics, Chemistry and Fourth Optional Subject) shall be taken into account.</li>
            <li className="ml-60 list-decimal mt-3">For minimum eligibility rounding of marks and normalised marks will not be considered</li>
           </ul>
            </div>
            <table className="border-2  mt-10 ml-50 p-2 w-250">
                <tr className="border-2 p-2">
                    <th className="border-2 text-2xl font-bold font-serif bg-blue-950 text-white p-2 row-span-2">ADMISSION CRITERIA</th>
                    <th className="border-2 "></th>
                </tr>
                <tr>
                    <td className="border-black bg-orange-500 text-white p-2">PG PROGRAMMES OFFERED</td>
                    <td className="border-black bg-green-500  text-white p-2">Eligible Qualification</td>
                </tr>
                <tr>
                    <td className="border-2 p-2">
                    1. M.E. Structural Engineering</td>
                    <td className="border-2 p-2">
                    B.E./B.Tech.<p className="ml-4 mt-4">1.Civil Engineering</p>
                    <p className="ml-4 mt-2">2.Civil and Structural Engineering</p></td>
                </tr>
                <tr>
                    <td className="border-2 p-2">2. M.E. CAD/CAM</td>
                    <td className="border-2 p-2">B.E./B.Tech.
                    <p className="ml-4 mt-2">1.Mechanical Engineering</p>
                    <p className="ml-4 mt-2">2.Automobile Engineering</p>
                    <p className="ml-4 mt-2">3.Manufacturing Engineering</p>
                    <p className="ml-4 mt-2">4.Production Engineering</p>
                    <p className="ml-4 mt-2">5.Aerospace Technology</p>
                    <p className="ml-4 mt-2">6.Industrail Engineering</p>
                    <p className="ml-4 mt-2">7.Mechatronics Engineering</p>
                    <p className="ml-4 mt-2">8.Marine Engineering</p>
                    <p className="ml-4 mt-2">9.Aeronautical Engineering</p>
                    <p className="ml-4 mt-2">10.Aerospace Engineering</p>
                </td>
                </tr>
                <tr>
                    <td className="border-2 p-2">3. M.E. Power Electronics and Drives</td>
                    <td className="border-2 p-2">B.E./B.Tech.<p className="ml-4 mt-2">1.Electrical and Electronics Engineering</p></td>
                </tr>
                <tr>
                    <td className="border-2 p-2">3. M.E. Communication Systems</td>
                    <td className="border-2 p-2">	
                    B.E./B.Tech.<p className="ml-4 mt-2">1.Electronics and Communication Engineering</p>
                    <p className="ml-4 mt-2">2.Electronics Engineering</p></td>
                </tr>
                <tr>
                    <td className="border-2 p-2">4. M.E. Computer Science & Engineering</td>
                    <td className="border-2 p-2">B.E./B.Tech.<p className="ml-4 mt-2">1.Electronics and Communication Engineering</p>
                    <p className="ml-4 mt-2">2.Information Technology Engineering</p>
                    <p className="ml-4 mt-2">3.Computer Science & Engineering</p>
                    <p className="ml-4 mt-2">4.Software Engineering</p>
                    <p className="ml-4 mt-2">5.Computer & Communication Engineering</p>
                    <p className="ml-4 mt-2">6.Electronics Engineering</p>
                    <p className="ml-4 mt-2">7.Medical Electronics Engineering</p>
                    <p className="ml-4 mt-2">8.Bio-Medical Engineering</p>
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <h1 className="font-serif font-bold text-2xl text-white bg-red-950 ml-20 mt-5 d-flex inline-block p-3">Eligibility Requirements for M.E:</h1>
            <p className="ml-20 mt-6">A pass in a recognised Bachelor’s degree or equivalent in the relevant field and obtained atleast 50 % (45 % in the case of candidates belonging to reserved category) in the qualifying degree examination</p>
            <ol >
                <li className="list-disc ml-30 mt-4">B.E., / B.Tech., degree programme</li>
                <li className="list-disc ml-30 mt-2">Master’s Degree in the relevant branch of Science/Arts, which are prescribed. (or)</li>
                <li className="list-disc ml-30 mt-2">Candidates with section ‘A’ & ‘B’ certificates and other similar certificate of professional bodies or societies (e.g. A.M.I.E.) recognised by the Ministry of Human Resource Development, Govt. of India are considered to be equivalent to B.E. / B.Tech. Degree holders only with 2 Years regular full time Teaching experience / Industrial experience* in the relevant field after successful completion of the course including project work</li>
                <p className="ml-20 mt-6 font-semibold">*An experience certificate is to be produced by the candidates with AMIE., Qualification.</p>
                <li className="list-disc ml-30 mt-5">10+2 Years H.Sc., + AMIE., (with 2 Years experience) </li>
                <li className="list-disc ml-30 mt-2">10+3 Years Diploma (awarded by the State Board of Technical Education) + AMIE., (with 2 Years experience)</li>
            </ol>
            <p className="font-serif font-bold text-2xl text-blue-900 ml-30 mt-10">Note:</p>
            <ul>
            <li className="ml-40 list-decimal mt-5">Candidates with B.E.,/B.Tech., Degrees obtained through Distance mode/Week End courses are not eligible</li>
            <li className="ml-40 list-decimal mt-3">Candidates with MCA.,/M.Sc., Degree obtained through Week End courses are not eligible</li>
            <li className="ml-40 list-decimal mt-3">Candidates with Degree obtained without studying 10th , 12th Std. or 3 Years Diploma and 3/4 years Degree programme are not eligible</li>
            <li className="ml-40 list-decimal mt-3">Candidates appearing for the final semester / year examination of the said qualifying degree course except AMIE., during April / May 2019 may also apply for TANCET-2019</li>
            </ul>
        </div>
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

export default Eligibility