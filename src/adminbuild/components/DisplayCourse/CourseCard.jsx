import axios from "axios";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const CourseCard = ({ course, loading }) => {
  const baseURL=import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  async function handleDelete() {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return;
    try {
      await axios.delete(`${baseURL}/courses/delete/${course._id}`);
      alert("Course deleted successfully!");
      window.location.reload();
    } catch (err) {
      console.error("Error deleting course:", err);
      alert("Failed to delete course");
    }
  }

  return (
    <div className="flex flex-col border border-gray-400 bg-transparent rounded-3xl w-[350px] hover:-translate-y-4 hover:shadow-lg hover:shadow-black transition-all duration-200">
      {/* Course Image */}
      <div className="border-b ">
        {loading ? (
          <Skeleton height={200} className="rounded-t-3xl" />
        ) : course?.image ? (
          <img src={course.image} className="rounded-t-3xl aspect-video object-cover w-full" alt="Course" />
        ) : (
          <div className="text-center text-gray-500 p-4">No image found</div>
        )}
      </div>

      {/* Card Content */}
      <div className="h-full p-3 flex flex-col gap-2">
        <span className="font-semibold text-xl line-clamp-1">
          {loading ? <Skeleton width={200} /> : course?.title}
        </span>
        <span className="text-gray-500 text-sm">
          {loading ? <Skeleton count={2} /> : course?.subtitle}
        </span>

        {/* Buttons */}
        <div className="flex justify-between pt-2">
          {loading ? (
            <>
              <Skeleton width={80} height={35} borderRadius={20} />
              <Skeleton width={80} height={35} borderRadius={20} />
              <Skeleton width={80} height={35} borderRadius={20} />
            </>
          ) : (
            <>
              <button
                className="px-7 bg-green-400 py-2 rounded-2xl hover:shadow-lg hover:border-green-900 border-2 transition-all duration-200 border-transparent"
                onClick={() => navigate(`/admin/course_edit/${encodeURIComponent(course?.title)}`)}
              >
                Edit
              </button>
              <button
                className="px-7 bg-blue-400 py-2 rounded-2xl hover:shadow-lg hover:border-green-900 border-2 transition-all duration-200 border-transparent"
                onClick={() => navigate(`/admin/courses/${encodeURIComponent(course?.title)}`)}
              >
                View
              </button>
              <button
                className="px-7 bg-red-400 py-2 rounded-2xl hover:shadow-lg hover:border-red-950 border-2 transition-all duration-200 border-transparent"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
