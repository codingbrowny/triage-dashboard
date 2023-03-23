import { gql } from "@apollo/client";

export const DeleteDoctor = gql`
    mutation deleteDoctor($id: String) {
        deleteDoctor(id: $id) {
            id
            username
        }
    }
`
export const Deletecase = gql`
    mutation deleteCase($id: String!) {
        deleteCase(id: $id) {
            message
        }
    }
`