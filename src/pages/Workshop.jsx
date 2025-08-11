import { useState } from "react";
import { FaUser, FaUniversity, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import WorkshopLottie from "../components/WorkShopLottie";

const WorkshopForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    contact: "",
    domain: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen py-10 px-4 flex justify-center items-center mt-20"
      style={{ backgroundImage: 'linear-gradient(to right, #f5e1ff, #ece1f7)' }}
    >
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl flex flex-col lg:flex-row overflow-hidden">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-blue-500 mb-1 text-center">
            Workshops
          </h2>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Only for College / University Administration
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Contact Us to Conduct a Workshop
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the form below to get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center gap-2 my-2 text-sm font-medium text-gray-600">
                <FaUser className="text-blue-500" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 my-2 text-sm font-medium text-gray-600">
                <FaUniversity className="text-blue-500" /> College Name
              </label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="Enter your college name"
                className="w-full px-4 py-2 border rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm my-2 font-medium text-gray-600">
                <FaPhoneAlt className="text-blue-500" /> Contact Number
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="w-full px-4 py-2 border rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium my-2 text-gray-600 mb-1">
                Domain for Workshop
              </label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select a domain</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="ML">Machine Learning</option>
                <option value="WebDev">Web Development</option>
                <option value="CyberSecurity">Cyber Security</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-600"
            >
              <FaPaperPlane /> Send Request
            </button>
          </form>
        </div>

        {/* Lottie Animation Section */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-blue-50 items-center justify-center p-8">
          <WorkshopLottie />
        </div>
      </div>
    </div>
  );
};

export default WorkshopForm;
