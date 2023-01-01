import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import  * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Home",
    path: "",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Menu",
    path: "/Menu",
    icon: <BiIcons.BiFoodMenu />,
    cName: "nav-text",
  },
  {
    title: " Our Services",
    path: "/OurServices",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Contact us",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
    {
    title: "Cart",
    path: "/Cart",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
 
  {
    title: "About Us",
    path: "/AboutUs",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
