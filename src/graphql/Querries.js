import {gql} from '@apollo/client'

export const GET_TASKS= gql`

query Query {
  getTasks {
    title
    id
    completed
    description
  }
}

`