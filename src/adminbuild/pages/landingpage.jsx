import { Route,Routes,Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import SideNavbar from "../components/sidenavbar";

import HomePage from "./homepage";
import DisplayCourse from "./DisplayCourse";
import ViewCourse from "./ViewCourse";

import UploadCourseForm from "./UploadCourse";
import EditCourse from "./EditCourse";
import StudentsData from "./StudentsData";


const AdminLandingPage=({user})=>{
    const baseURL=import.meta.env.VITE_BACKEND_URL;
    console.log(baseURL);
    const [courses,setCourses]=useState(null);
    const [allUsers,setAllUsers]=useState(null);
    const [admins,setAdmins]=useState(null);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const courseRes= await axios.get(`${baseURL}/courses`);
                setCourses(courseRes.data);
                const adminRes=await axios.get(`http://localhost:5000/api/users/admins`);
                setAdmins(adminRes.data);
                const usersRes=await axios.get(`http://localhost:5000/api/users`);
                setAllUsers(usersRes.data);
            }
            catch(err){
                setError(err);
            }
        }
        fetchData();
    },[]);
    if(error) return<div>{error}</div>
    if(!courses||!allUsers||!admins) return<div>Loading......</div>

    return(
        <div className="min-w-screen min-h-screen flex" style={{fontFamily:"Poppins"}}>
            <SideNavbar/>
            <Routes>
                <Route path="/home" element={<HomePage user={user} courses={courses} studentsCount={allUsers.length-admins.length} adminsCount={admins.length}/>}/>
                
                <Route path="/courses" element={<DisplayCourse/>}/>
                <Route path="/course/:title" element={<ViewCourse/>}/>
                <Route path="/course_edit/:title" element={<EditCourse/>}/>

                <Route path="/enrolledstudentsdata" element={<StudentsData/>}/>

                <Route path="/uploadCourse" element={<UploadCourseForm/>}/>
            </Routes>
        </div>
    )
}
export default AdminLandingPage;