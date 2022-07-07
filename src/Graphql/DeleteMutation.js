import { gql } from '@apollo/client';

  export const DELETE_LEAD = gql`
    mutation deleteLead($id: ID!) {
        deleteLead(id: $id){
            data{
              id
              attributes{
                Name
                Notes
                Source
                Status
                Time
                date
                createdAt
                updatedAt
                email
              }
            }
          }
    }
  `;
