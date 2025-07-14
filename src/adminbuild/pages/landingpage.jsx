import { Route,Routes,Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import SideNavbar from "../components/sidenavbar";

import DashBoard from "./DashBoard";
import DisplayCourse from "./DisplayCourse";
import ViewCourse from "./ViewCourse";

import UploadCourseForm from "./UploadCourse";
import EditCourse from "./EditCourse";
import StudentsData from "./StudentsData";
import Loading from "../../components/Loading";


const AdminLandingPage=({user})=>{
    const baseURL=import.meta.env.VITE_BACKEND_URL;
    const [courses,setCourses]=useState(null);
    const [allUsers,setAllUsers]=useState(null);
    const [admins,setAdmins]=useState(null);
    const [enrolledList,setEnrolledList]=useState(null);
    const [error,setError]=useState(null);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const courseRes= await axios.get(`${baseURL}/courses`);
                setCourses(courseRes.data);
                const adminRes=await axios.get(`${baseURL}/users/admins`);
                setAdmins(adminRes.data);
                const usersRes=await axios.get(`${baseURL}/users`);
                setAllUsers(usersRes.data);
                const enrolledListRes=await axios.get(`${baseURL}/enrollment/enrolledstudents`);
                setEnrolledList(enrolledListRes.data);
            }
            catch(err){
                setError(err);
            }
        }
        fetchData();
    },[]);

    if(error) return<div>{error}</div>

    if(!courses||!allUsers||!admins||!enrolledList) return <Loading/>;

    const latestThree = enrolledList
        .sort((a, b) => new Date(b.enrollmentDate) - new Date(a.enrollmentDate))
        .slice(0, 3);

    return(
        <div className="w-[100%] min-h-screen flex" style={{fontFamily:"Poppins"}}>
            <SideNavbar/>
            <Routes>
                <Route path="/dashboard" element={<DashBoard user={user} courses={courses} studentsCount={allUsers.length-admins.length} latestThree={latestThree}/>}/>
                
                <Route path="/courses" element={<DisplayCourse/>}/>
                <Route path="/courses/:title" element={<ViewCourse/>}/>
                <Route path="/course_edit/:title" element={<EditCourse/>}/>

                <Route path="/enrolledstudents" element={<StudentsData/>}/>

                <Route path="/uploadCourse" element={<UploadCourseForm/>}/>
            </Routes>
        </div>
    )
}
export default AdminLandingPage;