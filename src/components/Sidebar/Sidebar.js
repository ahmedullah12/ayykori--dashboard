import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaCalendar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBag } from "react-icons/io5";

const menus = [
  {
    menuHead: "Menu",
    menuItems: [
      {
        menu: "Dashboard",
        icon: <RxDashboard size={20} />,
        link: "/dashboard",
      },
      {
        menu: "Message",
        icon: <MdEmail size={20} />,
        link: "/message",
      },
      {
        menu: "Calendar",
        icon: <FaCalendar size={20} />,
        link: "/calendar",
      },
    ],
  },
  {
    menuHead: "Recruitment",
    menuItems: [
      {
        menu: "Job",
        icon: <IoBag size={20} />,
        link: "/dashboard",
      },
      {
        menu: "Application",
        icon: <MdEmail size={20} />,
        link: "/message",
      },
      {
        menu: "My Referrals",
        icon: <FaCalendar size={20} />,
        link: "/calendar",
      },
      {
        menu: "Career Site",
        icon: <FaCalendar size={20} />,
        link: "/calendar",
      },
    ],
  },
  {
    menuHead: "Organization",
    menuItems: [
      {
        menu: "Employee",
        icon: <RxDashboard size={20} />,
        link: "/dashboard",
      },
      {
        menu: "Structure",
        icon: <MdEmail size={20} />,
        link: "/message",
      },
      {
        menu: "Logout",
        icon: <FaCalendar size={20} />,
        link: "/calendar",
      },
    ],
  },
];

const Sidebar = () => {
  const [activeButtons, setActiveButtons] = useState({
    0: 0,
  });

  const handleButtonClick = (menuIndex, itemIndex) => {
    setActiveButtons({
      ...activeButtons,
      [menuIndex]: itemIndex,
    });
  };

  return (
    <div className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
      <div className="ms-[54px] mt-[24px] mb-[20px]">
        <img src={logo} alt="" />
      </div>

      <div className="ms-[35px]">
        {menus.map((menu, menuIndex) => {
          return (
            <div key={menuIndex}>
              <p className="font-bold mb-3">{menu.menuHead}</p>
              {menu.menuItems.map((item, itemIndex) => {
                return (
                  <div key={itemIndex}>
                    <button
                      className={`flex items-center gap-4 py-3 ps-3 pe-[69px] rounded-md ${
                        activeButtons[menuIndex] === itemIndex
                          ? "bg-[#11998e] text-white"
                          : ""
                      }`}
                      onClick={() => handleButtonClick(menuIndex, itemIndex)}
                    >
                      {item.icon}
                      <Link to={item.link} className="text-base">
                        {item.menu}
                      </Link>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
