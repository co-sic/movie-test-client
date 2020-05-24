import gql from "graphql-tag";

export const GET_MOVIES = gql`
    query movies {
        movies {
            id
            name
            durationSeconds
            releaseDate
            actors {
                id
                name
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password){token}
    }
`;

export const REGISTER_USER = gql`
    mutation Register($username: String!, $password: String!) {
        register(username: $username, password: $password){id}
    }
`;