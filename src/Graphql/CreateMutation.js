import { gql } from '@apollo/client';

 export const CREATE_LEAD = gql`
    mutation createLead($data: LeadInput!) {
      createLead(data: $data) {
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
