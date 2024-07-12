const userTypeDef = `#graphql
  type User {
    _id: ID!
    email: String!
    username: String!
    password: String!
    profilePicture: String
    gender: String
    transactions: [Transaction!]
  }

  type Query {
    # users:[User!]
    authUser: User
    user(userId:ID!): User
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }

  input SignUpInput {
    email: String!
    username: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }
`;

export default userTypeDef;
