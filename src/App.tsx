import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './Navbar'
import Home from './Home'
import Task from './Task/Task'
import Html from './Task/Html'
import Css from './Task/Css'
import Navbarr from './Task/React/Navbarr'
import Homeee from './Task/React/Homeee'
import { useLocation } from "react-router-dom";
import Courseoffered from './Task/React/Courseoffered'
import Eligibility from './Task/React/Eligibility'
import Facilities from './Task/React/Facilities'
import Gallery from './Task/React/Gallery'
import Information from './Task/React/Information'
import Contact from './Task/React/Contact'
import StudentForm from './Task/React/Studentform'
import StudentTable from './Task/React/Studenttable'
import ViewStudent from "./Task/React/View"
import EditStudent from "./Task/React/Edit"
import { Delete, Edit, View } from 'lucide-react'
import Homeeee from './Task/Tailwind/Homeeee'

// import StudentTable from './Task/React/Studenttable'
// import Javascript from './Task/javascript/javascript'
// import MarksList from './Task/javascript/Displaymark'

function App() {
  return (
    <BrowserRouter>
<ConditionalNavbar/> 
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/task' element={ <Task/>}/>
      <Route path='/html' element={ <Html/>}/>
      <Route path='/css' element={ <Css />}/>
      <Route path='/homeee' element={ <Homeee/>}/>
      <Route path='/navbarr' element={ <Navbarr />}/>
      <Route path='/coursesoffered' element={<Courseoffered/>}/>
      <Route path='/eligibility' element={<Eligibility/>}/>
      <Route path='/facilities' element={<Facilities/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/information' element={<Information/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/studentform' element={<StudentForm/>}/>
      <Route path='/studenttable' element={<StudentTable/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path="/view/:rollNumber" element={<ViewStudent />} />
      <Route path='/deleteing' element={<Delete/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path="/edit/:rollNumber" element={<EditStudent />} />
      <Route path='/homeeee' element={<Homeeee />}/>


      {/* <Route path='/view' element={<StudentTable/>}/> */}
      {/* <Route path='/javascript' element={ <Javascript />}/> */}
      {/* <Route path='/displaymark' element={ <MarksList />}/> */}
    </Routes>
    </BrowserRouter>
  )
}


function ConditionalNavbar() {
  const location = useLocation();
  const hiddenNavbarPaths = ["/homeee","/coursesoffered","/eligibility","/facilities","/gallery","/information","/contact","/studentform"];

  const isHidden = hiddenNavbarPaths.includes(location.pathname);

  return !isHidden ? <Navbar /> : null;
}

export default App
