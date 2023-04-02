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
      caseChatCount
      createdAt
      updatedAt
    }
  }
`;

export const CASE_CHAT_QUERY = gql`
  query CaseChats($caseId: String!) {
    caseChats(caseId: $caseId) {
      postedBy
      message
      createdAt
    }
  }
`;
