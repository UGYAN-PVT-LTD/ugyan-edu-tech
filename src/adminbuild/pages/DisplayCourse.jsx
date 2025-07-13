import { useEffect, useState } from "react";

import CourseCard from "../components/CourseCard";

import axios from "axios";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const DisplayCourse=()=>{
    const baseURL=import.meta.env.VITE_BACKEND_URL;
    const [courses,setCourses]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        axios.get(`${baseURL}/courses`)
            .then(res=>{
                setCourses(res.data);
                setLoading(false);
            })
            .catch(err=>{
                setError('No Courses found!!');
                console.log(err);
            })
    },[]);
    if(error) return <div>Error</div>
    if (loading) {
        return (
        <div className="flex w-full justify-center items-center p-10">
            <ul className="grid lg:grid-cols-3 gap-16 md:grid-cols-2 grid-cols-1">
            {Array(6).fill().map((_, index) => (
                <li key={index}>
                <CourseCard loading={true} />
                </li>
            ))}
            </ul>
        </div>
        );
    }
    return(
        <>
            <div className="flex w-full justify-center items-center p-10">
                <ul className="grid lg:grid-cols-3 gap-16 md:grid-cols-2 grid-cols-1">
                    {   
                        courses.map((course,index)=>(
                            <li key={index}>
                                <CourseCard course={course} loading={loading}/>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        </>
    )
}
export default DisplayCourse;