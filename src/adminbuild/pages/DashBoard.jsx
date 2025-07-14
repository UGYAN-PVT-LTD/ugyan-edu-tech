import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { IoIosPlayCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { useState,useEffect } from "react";
import axios from "axios";

import Loading from "../../components/Loading"
import DataCard from "../components/Dashboard/DataCard";
import ProgressOverview from "../components/Dashboard/ProgressOverview";
import RecentStudentTable from "../components/Dashboard/RecentStudentTable";

const DashBoard=({user,courses,studentsCount,latestThree})=>{
    const baseURL=import.meta.env.VITE_BACKEND_URL;
    const [progress,setProgress]=useState(null);
     useEffect(() => {
        axios.get(`${baseURL}/progress/weekly-registrations`)
        .then(res => setProgress(res.data))
        .catch(err => console.error('Fetch error', err));
    }, []);
    const navigate=useNavigate();
    const cardList=[
        {
            "icon":<FaBook/>,
            "count":courses.length,
            "text":"Total Courses"
        },
        {
            "icon":<PiStudentFill/>,
            "count":studentsCount,
            "text":"Total Students"
        },
        {
            "icon":<IoIosPlayCircle/>,
            "count":courses.length,
            "text":"Active Courses",
        },
        {
            "icon":<TiTick/>,
            "count":courses.length,
            "text":"Completed Courses"
        }
    ]
    if(!progress) return <div>Loading..</div>;
    
    return(
        <>
            <div className="w-full pl-[23%] flex flex-col p-10 bg-blue-50">
                <div className="text-xl mb-3 font-semibold">
                    DashBoard Overview
                </div>
                <div className="flex gap-4 w-full">
                    {
                        cardList.map((card,index)=>(
                            <div key={index}>
                                <DataCard icon={card.icon} count={card.count} text={card.text}/>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-5 shadow-2xl">
                    <ProgressOverview data={progress}/>
                </div>
                <div className="w-full flex flex-col shadow-2xl mt-5 p-4 bg-white rounded-xl">
                    <div className="flex justify-between px-4 pt-3">
                        <h2 className="text-lg font-semibold "> Recent Registrations</h2>
                        <a className="text-sm text-blue-500 hover:underline cursor-pointer transition-all" onClick={()=>navigate('/admin/enrolledstudents')}>View All</a>
                    </div>
                    <div>
                        <RecentStudentTable data={latestThree}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashBoard;