import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Clients from '../Clients';
import Home from '../Home';
import Chats from '../Chats';
import Schedule from '../Schedule';
import Bookings from '../Bookings';
import Programs from '../Programs';
import Settings from '../Settings';
import Finance from '../Finance';
import Resources from '../Resources';
import Packages from '../Packages';
import CollapisbleSidebar from '../CollapsibleSidebar';

function Sidebar() {

  return (
    <BrowserRouter>
     <CollapisbleSidebar>
      <Routes>
        <Route exact path='/' component={Clients}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/chats' component={Chats}></Route>
        <Route exact path='/schedule' component={Schedule}></Route>
        <Route exact path='/bookings' component={Bookings}></Route>
        <Route exact path='/programs' component={Programs}></Route>
        <Route exact path='/settings' component={Settings}></Route>
        <Route exact path='/finance' component={Finance}></Route>
        <Route exact path='/resources' component={Resources}></Route>
        <Route exact path='/packages' component={Packages}></Route>
      </Routes>
      </CollapisbleSidebar>
    </BrowserRouter>
  )
}

export default Sidebar;
