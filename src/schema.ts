import { gql } from 'apollo-server-express'

const schema = gql`
  directive @deprecated(
    reason: String = "Please revoke support."
  ) on FIELD_DEFINITION

  # query

  type Query {
    # getSomethingByParam(params: type!):something
    getSomething: User
  }

  # mutation

  type Mutation {
    doDomethingByParam(params: String!): Boolean
  }

  # type
  type User {
    id: String!
    email: String!
    name: String
  }

  # input

  # enum

  enum Sample {
    TEST1
    TEST2
    TEST3
  }

  # result
`

export default schema
