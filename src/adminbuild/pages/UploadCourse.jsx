import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadCourseForm = () => {
  const baseURL=import.meta.env.VITE_BACKEND_URL;
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    duration: "",
    lessons: [],
    extras: [],
    careers: {
      roles: [],
      package: "",
    },
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading,setLoading]=useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (e, key) => {
    const items = e.target.value.split(",").map(item => item.trim());
    setFormData(prev => ({
      ...prev,
      [key]: items
    }));
  };

  const handleCareersChange = (e) => {
    const { name, value } = e.target;
    if (name === "roles") {
      const roles = value.split(",").map(role => role.trim());
      setFormData(prev => ({
        ...prev,
        careers: { ...prev.careers, roles }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        careers: { ...prev.careers, package: value }
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageChange({ target: { files: e.dataTransfer.files } });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!imageFile) {
      return setMessage("Image is required");
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("subtitle", formData.subtitle);
    data.append("description", formData.description);
    data.append("duration", formData.duration);
    data.append("lessons", JSON.stringify(formData.lessons));
    data.append("extras", JSON.stringify(formData.extras));
    data.append("careers", JSON.stringify(formData.careers));
    data.append("image", imageFile);

    try {
      const res = await axios.post(`${baseURL}/courses/create`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Course uploaded successfully!Uploaded Courses can be seen in the Courses tab");
      console.log(res.data);
      setFormData({
        title: "",
        subtitle: "",
        description: "",
        duration: "",
        lessons: [],
        extras: [],
        careers: {
          roles: [],
          package: "",
        },
      });
      setImageFile(null);
      setImagePreview(null);

    } catch (err) {
      console.error(err.response?.data || err);
      setMessage("Upload failed.");
    }
    setLoading(false);
    navigate('/admin/courses');
  };

  return (
    <div className="w-full pl-[23%] bg-blue-50 p-5">
      <div
        className="p-6 max-w-2xl mx-auto flex flex-col bg-white justify-center items-center border-gray-900 rounded-3xl shadow-lg shadow-black"
      >
        <h2 className="text-2xl font-bold mb-4 text-sky-700">Upload a New Course</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            name="title"
            type="text"
            placeholder="Course Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="p-2 border-2 border-gray-200 focus:border-gray-500 focus:outline-none rounded-2xl"
          />
          <input
            name="subtitle"
            type="text"
            placeholder="Subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            required
            className="p-2 border-2 border-gray-200 focus:border-gray-500 focus:outline-none rounded-2xl"
          />
          <textarea
            name="description"
            placeholder="Full Description"
            value={formData.description}
            onChange={handleChange}
            rows={7}
            required
            className="p-2 border-2 border-gray-200 focus:border-gray-500 focus:outline-none rounded-2xl"
          />          
          <label className="font-medium text-gray-700">Lessons:</label>
          <div className="flex flex-col gap-2">
            {formData.lessons.map((lesson, index) => (
              <div key={index} className="flex items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder={`Lesson ${index + 1}`}
                  value={lesson}
                  onChange={(e) => {
                    const newLessons = [...formData.lessons];
                    newLessons[index] = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      lessons: newLessons,
                    }));
                  }}
                  className="flex-1 p-4 border-2 border-gray-200 w-[80%] focus:border-gray-500 focus:outline-none rounded-2xl"
                />
                <button
                  type="button"
                  onClick={() => {
                    const newLessons = formData.lessons.filter((_, i) => i !== index);
                    setFormData((prev) => ({
                      ...prev,
                      lessons: newLessons,
                    }));
                  }}
                  className="text-red-500 hover:text-red-700 text-2xl font-bold p-2 transition-all duration-200"
                  title="Delete Lesson"
                >
                  🗑
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  lessons: [...prev.lessons, ""],
                }))
              }
              className="flex items-center gap-2 text-green-600 w-[30%] justify-center border font-semibold mt-2"
            >
              <span className="text-3xl">+</span> Add New Lesson
            </button>
          </div>
          <input
            type="text"
            placeholder="Extras (comma separated)"
            onChange={(e) => handleArrayChange(e, "extras")}
            value={formData.extras.join(", ")}
            className="p-2 border-2 border-gray-200 focus:border-gray-500 focus:outline-none rounded-2xl"
          />
          <input
            name="duration"
            type="text"
            placeholder="Duration (e.g., 2 Months)"
            value={formData.duration}
            onChange={handleChange}
            className="p-2 border-2 border-gray-200 focus:border-gray-500 focus:outline-none rounded-2xl"
          />
          <input
            name="roles"
            type="text"
            placeholder="Career Roles (comma separated)"
            value={formData.careers.roles.join(", ")}
            onChange={handleCareersChange}
            className="p-2 border-2 border-gray-200 focus:border-gray-500 focus:outline-none rounded-2xl"
          />
          <input
            name="package"
            type="text"
            placeholder="Career Package"
            value={formData.careers.package}
            onChange={handleCareersChange}
            className="p-2 border-2 border-gray-200 focus:border-gray-500 focus:outline-none rounded-2xl"
          />

          <div
            className={`border-2 border-dashed rounded-2xl p-6 transition-colors duration-300 ${
              dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
          >
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center gap-4 cursor-pointer"
            >
              {imagePreview ? (
                <>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-48 rounded-xl object-contain"
                />
                <span>Browse Files</span>
                </>
              ) : (
                <>
                  <span className="text-gray-500 text-sm text-center">
                    Drag & drop an image here, or click to upload (Required*)
                  </span>
                  <div className="px-4 py-2 bg-gray-200 rounded-md text-sm text-gray-700">
                    Browse Files
                  </div>
                </>
              )}
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            {loading?`Uploading...`:`Upload`}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default UploadCourseForm;
