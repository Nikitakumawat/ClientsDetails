import React, { useState } from 'react';
import TabList from '../TabList';
import SearchBar from '../SearchBar';
import './styles.css';
import Button from '@mui/material/Button';
import Table from '../Table/index.js';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Modal from '../Modal/index';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Clients() {
  const [showModal, setShowModal ] = useState(false);

  return (
    <div className="clients__details">
      <h1>
        Clients
      </h1>
      <div className='client_table'>
        <TabList/>
        <div className="subheader">
          <SearchBar/>
          <Button variant="outlined" style={{ color: 'black' , border: '1px solid black' }} onClick={() => {setShowModal(true)}} endIcon={<AddCircleOutlineIcon />}>Add Client</Button>
        </div>
        <div className='sort'>
            <FilterListOutlinedIcon/>
            <p className='text'>Sort</p>
        </div>
        <Table/>
        { showModal && <Modal closeModal={setShowModal}/>}
      </div>
    </div>
  )
}

export default Clients;
