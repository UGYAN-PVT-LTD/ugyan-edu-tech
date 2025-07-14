const RecentStudentTable = ({ data }) => {
    console.log(data);
  return (
    <>
      <div className="mt-5">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm font-medium">
            <tr className="grid grid-cols-4 px-6 py-3">
              <th>Student</th>
              <th>Course</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {data.map((student, index) => (
              <tr
                key={index}
                className="grid grid-cols-4 items-center px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-xs">
                    👤
                  </div>
                  {student.student.firstName+" "+student.student.lastName}
                </td>
                <td>{student.course.title}</td>

                <td>
                  {new Date(student.enrollmentDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    }
                  )}
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : student.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {student.status || "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default RecentStudentTable;
