import { buildSchema } from 'graphql';

/*
  Your schema file defines the input parameters that each endpoint takes in as well
  as what responses they can give back.
  "!" on an input means that the field is required
  "!" on a return value means that, if the client requests it, it cannot be null

  The "character" query below denotes that a name parameter is required to call that endpoint
  and that a "Character" object must be returned.
  The "allCharacters" query takes in no input and the ARRAY must be returned. Note that the
  array could be empty. If we wanted to require something in the array, we would also add
  an "!" to the inside of the array.
*/

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