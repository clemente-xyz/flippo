import { gql } from "react-apollo";

export default gql`
  {
    getChallenges {
      _id
      animal
    }
  }
`;
