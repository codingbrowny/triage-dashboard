import { gql } from "@apollo/client";

export const AllCases = gql`
  query Cases {
    cases {
      id
      age
      claimed
      claimedBy
      closed
      description
      images
      history
      sex
      postedBy
      createdAt
      updatedAt
    }
  }
`;

export const SingleCase = gql`
  query SingleCase($id: ID) {
    case(id: $id) {
      id
      description
      claimed
      claimedBy
      closed
      postedBy
      images
      sex
      age
      history
      createdAt
      updatedAt
    }
  }
`;
