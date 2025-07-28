import Home from './home/Home'
import {Route, Routes} from 'react-router-dom'
import Courses from './courses/Courses'
import ContactUs from './contactus/ContactUs'
import AboutUs from './aboutus/AboutUs'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import { Navigate } from "react-router-dom";

function App() {
  const[authUser,setAuthUser] = useAuth();
   console.log(authUser);
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster/>
     </div>
    </>
  )
}

export default App