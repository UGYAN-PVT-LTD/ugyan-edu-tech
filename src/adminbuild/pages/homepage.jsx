import { useNavigate } from "react-router-dom";

const HomePage=({user,courses,studentsCount,adminsCount})=>{
    const navigate=useNavigate();
    const latestDate = new Date(Math.max(...courses.map(course => new Date(course.updatedAt))));
    const formattedDate = latestDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
        });
    return(
        <>
            <div className="w-full min-h-screen flex flex-col justify-center lg:p-10 lg:pl-16 lg:gap-10">
                <div className="flex w-full gap-3">
                    <div className="bg-blue-600 shadow-md shadow-blue-400 w-[80%] justify-start p-5 rounded-3xl flex flex-col gap-3 text-gray-200">
                        <span className="text-2xl font-bold">Welcome Back Admin!!</span>
                        <span className="text-gray-300">
                            Manage courses, monitor student activity, and keep your platform up to date.
                            <br />
                            Track enrollments, review feedback, and ensure a smooth learning experience for all users.
                            <br />
                            Use the dashboard tools to stay informed and in control.
                        </span>
                    </div>
                    <div className="flex justify-center items-center shadow-lg rounded-3xl gap-4 w-[20%] pt-2 relative">
                        <div className="flex flex-col justify-center items-center text-lg lg:text-xl p-5">
                            <span>Admins Count</span>
                            <span className="font-semibold lg:text-2xl text-violet-800">{adminsCount}</span>
                        </div>
                        <div className="absolute -right-2 -top-1 scale-75">
                            <button className="flex border gap-1  hover:gap-4 focus:gap-4 border-b-violet-500 py-2 px-3 rounded-3xl bg-black text-white hover:bg-black/75 transition-all duration-200"
                                onClick={()=>navigate('/admin/panel')}>
                                <span>Admin Panel</span><span> &#x2192;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex justify-center items-center shadow-lg rounded-3xl gap-4 w-[20%] pt-2 bg-gray-800 text-white relative">
                        <div className="flex flex-col justify-center items-center text-lg lg:text-xl p-5 gap-2 ">
                            <span>Courses Count</span>
                            <span className="lg:text-4xl font-semibold text-violet-300">{courses.length}</span>
                        </div>
                        <div className="absolute -right-4 top-0 scale-75">
                            <button 
                                className="flex border gap-1  hover:gap-4 focus:gap-4 border-b-violet-500 py-2 px-3 rounded-3xl bg-black text-white hover:bg-black/75 transition-all duration-200"
                                onClick={()=>navigate('/admin/courses')}>
                                <span>Courses Panel</span><span> &#x2192;</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex w-[80%]  shadow-md rounded-3xl p-5 text-lg bg-gray-100">
                        <ol className="list-disc pl-7">
                            {courses.map((course,index)=>(
                                <li key={index}>
                                    <span>{course.title} : {course.subtitle}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col p-5 shadow-lg w-[20%] justify-center items-center lg:text-xl h-full gap-1 rounded-3xl bg-gray-800 text-white">
                        <span>Students Count</span>
                        <span className="font-bold lg:text-4xl text-violet-300">{studentsCount}</span>
                    </div>
                    <div className="flex flex-col p-5 shadow-lg justify-center items-center h-full gap-1 rounded-3xl">
                        <span className="font-semibold">To check the Enrolled Students Data</span>
                        <button className="flex gap-2 border justify-center text-sm border-b-violet-500 py-2 px-3 rounded-3xl bg-black text-white hover:bg-black/75 transition-all duration-200 hover:gap-4 focus:gap-4"
                                onClick={()=>navigate('/admin/enrolledstudentsdata')}
                        >
                            <span>Check this button</span><span className="font-bold">&#x2192;</span>
                        </button>
                    </div>
                    <div className="flex flex-col p-5 shadow-lg justify-center items-center h-full gap-1 rounded-3xl">
                        <span className="font-semibold">Updated a Course lastly on <span className="text-fuchsia-600">{formattedDate}</span></span>
                        <button className="flex gap-2 border justify-center text-sm border-b-violet-500 py-2 px-3 rounded-3xl bg-black text-white hover:bg-black/75 transition-all duration-200 hover:gap-4 focus:gap-4"
                                onClick={()=>navigate('/admin/courses')}>
                            <span>Update A Course</span><span className="font-bold">&#x2192;</span>
                        </button>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default HomePage;