import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = ({ setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const baseURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      const res = await fetch(`${baseURL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUserDetails(data);
        setUser && setUser(data);
      } else {
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate, setUser]);
  const handleLogOut=async()=>{
      localStorage.removeItem("token");
      setUser && setUser(null);
      navigate('/');
  }
  const handleEdit = async () => {
    if (isEditing) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${baseURL}/users/edit`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userDetails),
        });
        const data = await response.json();
        if (response.ok) {
          setUserDetails(data);
          setUser && setUser(data);
          setIsEditing(false);
        } else {
          throw new Error(data.error || "Failed to update profile");
        }
      } catch (error) {
        alert(error.message || "Failed to update profile.");
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteAccount = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${baseURL}/users/delete`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) {
          alert("Account deleted successfully.");
          localStorage.removeItem("token");
          setUser && setUser(null);
          navigate("/");
        } else {
          alert(data.error || "Failed to delete account.");
        }
      } catch {
        alert("Failed to delete account.");
      }
    }
  };

  if (!userDetails)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE9F7] to-[#D6C3F8] pt-24 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white/40 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "First Name", name: "firstName" },
            { label: "Last Name", name: "lastName" },
            { label: "Email", name: "email", readOnly: true },
            {
              label: "Date of Birth",
              name: "dob",
              type: "date",
              placeholder: "Select your birth date",
            },
            { label: "Mobile Number", name: "mobileNumber" },
            {
              label: "Branch",
              name: "branch",
              type: "select",
              options: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "Other"],
            },
            {
              label: "Pass Out Year",
              name: "passOutYear",
              type: "select",
              options: Array.from({ length: 30 }, (_, i) => 2000 + i),
            },
            { label: "College Name", name: "collegeName", fullWidth: true },
          ].map((field) => (
            <div
              key={field.name}
              className={`${
                field.fullWidth ? "sm:col-span-2" : ""
              } flex flex-col`}
            >
              <label className="text-xs text-gray-500 mb-1">
                {field.label}
              </label>
              {isEditing && !field.readOnly ? (
                field.type === "select" ? (
                  <select
                    name={field.name}
                    value={userDetails[field.name] || ""}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 text-sm focus:outline-none"
                  >
                    <option value="">Select</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt} className="text-violet-900 cursor-pointer">
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={userDetails[field.name] || ""}
                    placeholder={field.placeholder || ""}
                    onChange={handleChange}
                    className="border rounded px-3 py-2 text-sm focus:outline-none focus:border-violet-800 "
                  />
                )
              ) : (
                <div className="text-[#2C2C2C] font-medium break-words">
                  {userDetails[field.name] || "-"}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-end">
          {isEditing ? (
            <>
              <button
                onClick={handleEdit}
                className="bg-purple-500 text-white px-6 py-2 rounded-full shadow hover:bg-purple-600 transition"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-black px-6 py-2 rounded-full shadow hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEdit}
                className="rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 px-5 py-2 text-white font-semibold bg-gradient-to-r from-blue-900 to-blue-500 brightness-110"
              >
                Edit Profile
              </button>
              <button onClick={handleLogOut} className="rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 px-5 py-2 text-white font-semibold bg-gradient-to-r from-violet-900 to-violet-500 ">
                LOG OUT
              </button>
              <button
                onClick={handleDeleteAccount}
                className="rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 px-5 py-2 text-black font-semibold bg-gradient-to-r from-red-500 to-red-300 "
              >
                Delete Account
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
