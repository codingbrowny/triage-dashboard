import { gql } from "@apollo/client";

export const DeleteDoctor = gql`
    mutation DeleteDoctor($id: String) {
        deleteDoctor(id: $id) {
            id
            username
        }
    }
`