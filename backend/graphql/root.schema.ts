import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    hardCodedResponse: String!
    responseWithParam(name: String!): String!
    greetingWithHeaderValue: String!
  }
`);