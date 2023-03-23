import { gql } from "@apollo/client";

export const AllDoctors = gql`
  query AllDoctors {
    doctors {
      id
      username
      speciality
      approved
      isPhysician
      mobile
    }
  }
`;

export const Doctor = gql`
  query Doctor($id: ID) {
    doctor(id: $id) {
      id
      username
      password
      speciality
      isPhysician
      approved
      passwordResetToken
      passwordResetExpires
      mobile
    }
  }
`;
