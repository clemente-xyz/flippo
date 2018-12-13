import { gql } from "react-apollo";

export default gql`
  mutation signup(
    $username: String!
    $password: String!
    $firstname: String
    $lastname: String
    $birth: String
  ) {
    signup(
      username: $username
      password: $password
      firstname: $firstname
      lastname: $lastname
      birth: $birth
    ) {
      token
    }
  }
`;
