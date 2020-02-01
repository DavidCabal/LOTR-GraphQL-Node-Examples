import { buildSchema } from 'graphql';

export const schema = buildSchema(`

  type Character {
    name: String!
    weapon: String!
    inFellowship: Boolean!
  }

  type Fellowship {
    members: [Character]!
    fellowShipPurpose: String!
  }

  type Query {
    hardCodedResponse: String!
    responseWithParam(name: String!): String!
    greetingWithHeaderValue: String!
    fellowship: Fellowship!
    character(name: String!): Character!
    allCharacters: [Character]!
  }
`);