import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { SiCoursera } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import {
  MdDataUsage,
  MdOutlineAdminPanelSettings,
  MdOutlineDriveFolderUpload,
  MdMenu,
  MdClose
} from "react-icons/md";
import { useState } from "react";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlist = [
    {
      item: "Dashboard",
      route: "/admin/dashboard",
      icon: <IoHomeOutline />,
    },
    {
      item: "Courses",
      route: "/admin/courses",
      icon: <SiCoursera />,
    },
    {
      item: "Upload Course",
      route: "/admin/uploadCourse",
      icon: <MdOutlineDriveFolderUpload />,
    },
    {
      item: "AdminPanel",
      route: "/admin/panel",
      icon: <MdOutlineAdminPanelSettings />,
    },
    {
      item: "Enrolled Students",
      route: "/admin/enrolledstudents",
      icon: <MdDataUsage />,
    },
    {
      item: "Profile",
      route: "/admin/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <>
      {/* Mobile Hamburger Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        {isOpen?
        (<button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-blue-500 pl-56"
        >
          <MdClose />
        </button>):
        (<button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-blue-500"
        >
          <MdMenu /> 
        </button>)
        }
        
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full w-[75%] sm:w-[60%] md:w-[20%] bg-white shadow-xl z-40 md:flex flex-col`}
      >
        <div className="flex flex-col w-full items-start p-4">
          <div className="text-xl font-semibold my-3">EduTech Admin</div>
          <div className="flex flex-col w-full mt-5 gap-0 text-gray-600">
            {navlist.map((item, index) => (
              <NavLink
                to={item.route}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-3 p-2 my-1 bg-blue-100 text-blue-500 rounded-md w-full"
                    : "flex items-center gap-3 p-2 my-1 hover:bg-gray-200 rounded-md w-full"
                }
                onClick={() => setIsOpen(false)} // Close on mobile click
              >
                <span className="text-lg font-semibold">{item.icon}</span>
                <span className="font-semibold text-sm">{item.item}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
