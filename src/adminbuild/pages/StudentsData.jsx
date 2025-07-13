import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as XLSX from "xlsx";

const StudentsData = () => {
  const baseURL=import.meta.env.VITE_BACKEND_URL;
  const [students, setStudents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/enrollment/enrolledstudents`)
      .then((res) => setStudents(res.data))
      .catch((err) => {
        console.log(err);
        setError("Some issue in the server.");
      });
  }, []);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      students.map((st, index) => ({
        "S.No": index + 1,
        "First Name": st.student.firstName,
        "Last Name": st.student.lastName,
        Email: st.student.email,
        "Mobile Number": st.student.mobileNumber,
        Course: st.course.title,
        "Enrollment Date": new Date(st.enrollmentDate).toLocaleString(),
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "Enrolled_Students.xlsx");
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col lg:p-10 p-5 gap-10 justify-center items-center w-full overflow-x-auto">
      <h2 className="text-3xl text-indigo-800 font-semibold text-center">
        All Enrolled Students
      </h2>
      <button
        onClick={exportToExcel}
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 shadow-md"
      >
        Export to Excel
      </button>
      <div className="w-full overflow-auto">
        <table className="min-w-[800px] w-full mt-5 text-sm md:text-base">
          <thead className="bg-indigo-800 text-white whitespace-nowrap">
            <tr className="font-semibold text-left">
              <th className="px-4 py-3">S.No</th>
              <th className="px-4 py-3">First Name</th>
              <th className="px-4 py-3">Last Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Mobile Number</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Enrollment Date</th>
            </tr>
          </thead>
          <tbody>
            {students ? (
              students.map((st, index) => (
                <tr key={st._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{st.student.firstName}</td>
                  <td className="px-4 py-2">{st.student.lastName}</td>
                  <td className="px-4 py-2">{st.student.email}</td>
                  <td className="px-4 py-2">{st.student.mobileNumber}</td>
                  <td className="px-4 py-2">{st.course.title}</td>
                  <td className="px-4 py-2">{new Date(st.enrollmentDate).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              Array.from({ length: 6 }).map((_, index) => (
                <tr key={index} className="border-b">
                  {Array.from({ length: 7 }).map((__, i) => (
                    <td key={i} className="px-4 py-2">
                      <Skeleton height={20} />
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsData;
