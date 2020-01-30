import { buildSchema } from 'graphql';

export const schema = buildSchema(`

  type FellowshipMember {
    name: String!
    weapon: String!
  }

  type Fellowship {
    members: [FellowshipMember]!
    purpose: String!
  }

  type Query {
    hardCodedResponse: String!
    responseWithParam(name: String!): String!
    greetingWithHeaderValue: String!
    fellowship: Fellowship!
    fellowshipMember(name: String): FellowshipMember!
  }
`);