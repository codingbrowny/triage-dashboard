import { gql } from "@apollo/client";

export const DeleteDoctor = gql`
  mutation deleteDoctor($id: String!) {
    deleteDoctor(id: $id) {
      id
    }
  }
`;

export const DeleteCase = gql`
  mutation deleteCase($id: String!) {
    deleteCase(id: $id) {
      message
    }
  }
`;

export const CreateNewCase = gql`
  mutation createNewCase($input: CaseInput!) {
    createNewCase(input: $input) {
      id
      closed
      claimed
      postedBy
      description
      age
      history
      images
      createdAt
    }
  }
`;
