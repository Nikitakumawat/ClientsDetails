import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './styles.css';

const CollapisbleSidebar = ({component}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const menuItem = [
        {
            path: "/",
            name: "Clients",
            icon: <PersonOutlineOutlinedIcon/>
        },
        {
            path: "/home",
            name: "Home",
            icon: <HomeOutlinedIcon/>
        },
        {
            path: "/finance",
            name: "Finance",
            icon: <LocalAtmOutlinedIcon/>
        },
        {
            path: "/schedule",
            name: "Schedule",
            icon: <CalendarTodayOutlinedIcon/>
        },
        {
            path: "/packages",
            name: "Packages",
            icon: <Inventory2OutlinedIcon/>
        },
        {
            path: "/programs",
            name: "Programs",
            icon: <LoyaltyOutlinedIcon/>
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <SettingsOutlinedIcon/>
        },
        {
            path: "/chats",
            name: "Chats",
            icon: <ChatBubbleOutlineOutlinedIcon/>
        },
        {
            path: "/bookings",
            name: "Bookings",
            icon: <BookOnlineOutlinedIcon/>
        },
        {
            path: "/resources",
            name: "Resouces",
            icon: <AcUnitOutlinedIcon/>
        },
    ]
  return (
    <div className="container">
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
          <div className="top_section">
            <div style={{marginLeft: isOpen ? "100px" : "0px"}} className="bars">
               <MenuIcon onClick={toggle}/>
            </div>
          </div>
          {
            menuItem.map((item, index) => (
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className='icon'>{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
          }
        </div>
        <main>{component}</main>
    </div>
  )
}

export default CollapisbleSidebar;
