import { gql } from "@apollo/client";

export const GET_CLIENTS_QUERY = gql`
query lead{
    leads{
      data{
        id
        attributes{
          Name
          email
          date
          Time
          Notes
          createdAt
          updatedAt
          Source
          Status
        }
      }
    }
  }
`;