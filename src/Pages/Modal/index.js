import React, { useState, useCallback } from 'react';
import './styles.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_LEAD } from '../../Graphql/CreateMutation';
import { GET_CLIENTS_QUERY } from '../../Graphql/Queries';

const emptyClientState = {
    Name: '',
    email: '',
    Source: null,
    Status: null,
    Notes: '',
    Time: null,
    date: null,
};

function Modal({ closeModal }) {
    const [ createLead ] = useMutation(CREATE_LEAD);
    const [detailsObject, setDetailsObject] = useState(emptyClientState);
    const {
        data: getClients,
        refetch: refetchCreateLead,
      } = useQuery(GET_CLIENTS_QUERY);
    
    const changeHandler = useCallback((type) => (e) => {
        const value = e.target ? e.target.value : e;
        setDetailsObject({ ...detailsObject, [type]: value });
    }, [detailsObject]);

    const submitHandler = async (e) => {
        e.preventDefault();

        const data = {
            Name: detailsObject.Name,
            email: detailsObject.email,
            Notes: detailsObject.Notes,
            Status: detailsObject.Status,
            Source: detailsObject.Source,
        };
    
        const createDetailsResponse = await createLead({ variables: { data } });
    
        if (!createDetailsResponse.error) {
          refetchCreateLead();
        }
    
        setDetailsObject(detailsObject);
        closeModal(false);
      };

    return (
        <div className='form_modal_background'>
        <div className='form_modal'>
            <div className="header">Lead</div>
            <form onSubmit={submitHandler}>
                <div className="status_dropdown_heading">
                    <h5>Status</h5>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={detailsObject.Status}
                                label="Status"
                                onChange={changeHandler('Status')}
                            >
                                <MenuItem value={"New"}>New</MenuItem>
                                <MenuItem value={"Interested"}>Interested</MenuItem>
                                <MenuItem value={"Follow_up"}>Follow_up</MenuItem>
                                <MenuItem value={"Negative"}>Negative</MenuItem>
                                <MenuItem value={"Enrolled"}>Enrolled</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <div className="source">
                    <h5>Source</h5>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Source</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={detailsObject.Source}
                                label="Source"
                                onChange={changeHandler('Source')}
                            >
                                <MenuItem value={"google"}>google</MenuItem>
                                <MenuItem value={"website"}>website</MenuItem>
                                <MenuItem value={"my_app"}>my_app</MenuItem>
                                <MenuItem value={"word_of_mouth"}>word_of_mouth</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <h4>Lead Details</h4>
                <hr />
                <div className="name">
                    <h5>Name</h5>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      placeholder="Enter Name"
                      style={{ width: 400}}
                      name='Name'
                      type='text'
                      onChange={changeHandler('Name')}
                      value={detailsObject.Name || ''}
                    />
                </div>
                <div className="email">
                    <h5>Email</h5>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      placeholder="Enter Email"
                      style={{ width: 400}}
                      name='email'
                      type='text'
                      onChange={changeHandler('email')}
                      value={detailsObject.email || ''}
                    />
                </div>
                <div className="notes">
                    <h5>Notes</h5>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Notes"
                        style={{ width: 300, height: 100, margin: '10px' }}
                        type='textarea'
                        onChange={changeHandler('Notes')}
                        value={detailsObject.Notes || ''}
                    />
                </div>
                <Button variant="contained" color="success" onClick={(e) => submitHandler(e)} style={{ width: 200, borderRadius: 40}}>
                    Submit
                </Button>
            </form>
        </div>
        </div>
    )
}

export default Modal;
