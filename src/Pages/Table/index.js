import React, { useState } from 'react';
import { format } from 'date-fns';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import IconButton from '@mui/material/IconButton';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS_QUERY } from '../../Graphql/Queries';
import Dropdown from '../Dropdown/index';
import './styles.css';

function Table() {
  const[show, setShow] = useState(false);
  const { data: getClients } = useQuery(GET_CLIENTS_QUERY);

  const showDropdown = () => {
      setShow(true);
  }

  return (
    <div className='table'>
      <table>
        <thead>
        <tr className='table_heading'>
          <th>Lead Date</th>
          <th>Name</th>
          <th>Email</th>
          <th>Source</th>
          <th>Last updated</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {
          getClients
            ? (getClients.leads.data.map((currValue, index) => (
              <tr className='table_row' key={index}>
                <td data-label="Lead Date">{currValue.attributes.date}</td>
                <td data-label="Name">{currValue.attributes.Name}</td>
                <td data-label="Email">{currValue.attributes.email}</td>
                <td data-label="Source">{currValue.attributes.Source}</td>
                <td data-label="Last updated">{format(new Date(currValue.attributes.updatedAt),'PP')}</td>
                <div className='status'><td>{currValue.attributes.Status}</td></div>
                <td><IconButton aria-label="kebabcase" onClick={() => {showDropdown()}}>
        <MoreVertOutlinedIcon />
      </IconButton></td>

      {show ? <Dropdown key={index} closeDropdown={setShow} clientCurrentId={currValue.id}/> : null}
              </tr>))
            )
            : null
        }
        </tbody>
      </table>
    </div>
  )
}

export default Table;
