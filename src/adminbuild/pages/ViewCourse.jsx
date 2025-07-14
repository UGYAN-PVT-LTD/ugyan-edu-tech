import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaClockRotateLeft } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ViewCourse = () => {
  const baseURL=import.meta.env.VITE_BACKEND_URL;
  const { title } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseURL}/courses/${title}`)
      .then((res) => {
        setCourse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Course Not Found!");
        setLoading(false);
      });
  }, [title]);

  if (error) return <div className="flex min-h-screen w-full pl-[23%] justify-start pt-15 ml-28 text-3xl font-bold text-red-500">{error}</div>;

  if (loading || !course) {
    return (
      <div className="flex flex-col w-full pl-[23%] justify-center items-start pt-20 p-10 gap-10 lg:gap-16">
        <Skeleton height={40} width={300} />
        <Skeleton count={2} />
        <div className="flex gap-10 flex-col lg:flex-row w-full">
          <Skeleton height={200} width={`100%`} />
          <Skeleton height={150} width={`100%`} />
        </div>
        <Skeleton height={200} count={2} />
      </div>
    );
  }

  const {
    subtitle,
    description,
    image,
    lessons = [],
    duration,
    extras = [],
    careers = { roles: [], package: "" },
  } = course;

  return (
    <div className="flex flex-col w-full pl-[23%] justify-center items-start pt-10 p-10 gap-10 lg:gap-16 bg-blue-50">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <span className="text-xl lg:text-4xl font-bold underline text-violet-900">
          {title}
        </span>
        <span className="text-sm lg:text-md">{subtitle}</span>
      </div>

      {/* Pic and description */}
      <div className="flex gap-5 lg:gap-10 lg:text-lg flex-col md:justify-center md:items-center lg:flex-row">
        <img
          src={image}
          alt="Course Image"
          className="lg:w-[40%] w-full md:w-[80%] rounded-2xl shadow-md  cursor-pointer"
        />
        <div className="flex justify-center bg-white items-center shadow-lg md:w-[80%] p-5 rounded-2xl cursor-pointer hover:-translate-y-3 transition-all duration-200">
          {description}
        </div>
      </div>

      {/* Lessons and Duration */}
      <div className="flex gap-20 lg:text-lg flex-col lg:flex-row md:items-center md:justify-center w-full">
        <div className="flex flex-col md:w-[80%] shadow-lg gap-4 bg-white rounded-2xl p-5 lg:p-10 hover:-translate-y-3 duration-200">
          <span className="text-xl lg:text-2xl text-indigo-700 font-semibold underline">
            ✔ Lessons
          </span>
          <ul className="flex flex-col gap-2 list-disc pl-5">
            {lessons.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>
          <div className="pt-5 flex gap-3">
            <span>
              <FaClockRotateLeft className="text-3xl lg:text-6xl text-indigo-800" />
            </span>
            <div className="font-semibold flex justify-center items-center gap-3">
              <span className="text-indigo-600 text-lg">Duration: </span>
              <span className="underline underline-offset-4">{duration}</span>
            </div>
          </div>
        </div>

        {/* Extras and Careers */}
        <div className="flex flex-col md:w-[80%] shadow-lg gap-4 rounded-2xl bg-white p-5 lg:p-10 hover:-translate-y-3 duration-200">
          <div className="flex flex-col gap-5">
            <span className="text-indigo-700 text-xl lg:text-2xl font-semibold underline">
              ✔ Student Benefits
            </span>
            <ul className="flex flex-col gap-3 list-disc pl-5">
              {extras.map((extra, index) => (
                <li key={index}>{extra}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-indigo-700 text-xl lg:text-2xl font-semibold underline">
              ✔ Career Opportunities Students Get
            </span>
            <ul className="flex flex-col gap-3 list-disc pl-5">
              {careers.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
            <div className="flex flex-col lg:gap-2">
              <span className="font-semibold">Expected Package: </span>
              <span>{careers.package}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
