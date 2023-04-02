import { gql } from "@apollo/client";

export const AllDoctors = gql`
  query AllDoctors {
    Doctors: doctors(isPhysician: false) {
      ...Details
    }
    Physicians: doctors(isPhysician: true) {
      ...Details
    }
  }

  fragment Details on Doctor {
    id
    username
    password
    speciality
    approved
    passwordResetToken
    passwordResetExpires
    isPhysician
    mobile
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
