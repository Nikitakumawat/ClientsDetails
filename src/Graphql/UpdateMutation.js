import { gql } from '@apollo/client';

 export const UPDATE_LEAD = gql`
    mutation updateLead($id: ID!, $data: LeadInput!) {
      updateLead(id: $id, data: $data) {
        data{
            id
            attributes{
              Name
              Notes
              email
              Source
              Status
              updatedAt
              createdAt
              Time
              date
            }
          }
      }
    }
  `;
