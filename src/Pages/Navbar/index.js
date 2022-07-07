import React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CircleIcon from '@mui/icons-material/Circle';
import './styles.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="left__header">
        <img src='https://sapien.systems/static/media/nav-logo.f46ae427.svg' alt='logo'/>
      </div>
      <div className="center__header">
       <h3>#BeAChangeMaker</h3>
      </div>
      <div className="right__header">
       <div className="logo"><AppsIcon/></div>
       <div className="logo"><NotificationsNoneIcon/></div>
       <div className="logo"><CircleIcon/></div>
      </div>
    </div>
  )
}

export default Navbar;
