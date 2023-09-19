import { gql } from "@apollo/client";

const GET_PROJETS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

export { GET_PROJETS };
