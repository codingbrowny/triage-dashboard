import { gql } from "@apollo/client";

export const DeleteDoctor = gql`
    mutation deleteDoctor($id: String!) {
        deleteDoctor(id: $id) {
            id
            username
        }
    }
`