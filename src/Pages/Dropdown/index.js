import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_LEAD } from '../../Graphql/DeleteMutation';
import { GET_CLIENTS_QUERY } from '../../Graphql/Queries';
import './styles.css';
import UpdateClientModal from '../UpdateClientModal';

function Dropdown({index, closeModal, closeDropdown, clientCurrentId}) {
  const [showUpdateModal, setShowUpdateModal ] = useState(false);
  const [ deleteLead ] = useMutation(DELETE_LEAD);

    const {
        data: getClients,
        refetch: refetchUpdateLead,
      } = useQuery(GET_CLIENTS_QUERY);

    const submitHandler = async (e) => {
        e.preventDefault();
        const id = clientCurrentId;
    
        const createDetailsResponse = await deleteLead({ variables: { id } });
    
        if (!createDetailsResponse.error) {
          refetchUpdateLead();
        }
        closeDropdown(false);
      };

  return (
    <>
    <div className='dropdown'>
      <li>
        <ul onClick={() => setShowUpdateModal(true)}>Edit</ul>
        <ul onClick={() => closeDropdown(false)}>View</ul>
        <ul onClick={(e) => submitHandler(e)}>Delete</ul>
      </li>
    </div>
    {showUpdateModal && <UpdateClientModal key={index} closeModal={false} clientCurrentId={clientCurrentId}/>}
    </>
  )
}

export default Dropdown;
