import { CharacterInput, Character, Fellowship } from "./interfaces/lotr.interface";
import { lotrDB } from '../../../fakeDB/lotr';

/*
  Take note that your DB queries/logic/etc must still be performant. GraphQL does not magically
  fix slow code. GraphQL CAN increase performance over the wire because less information can be
  sent in a response. The server side code run time, however, is unaffected.
*/

export const getCharacter = (args: CharacterInput): Character => {
  const member = lotrDB.members.find(member => member.name.toLowerCase() === args.name.toLowerCase());
  if (member) {
    return member;
  } else {
    throw new Error(`No entry found for name: ${args.name}`);
  }
};

export const getFellowship = (): Fellowship => {
  const members = lotrDB.members.reduce((acc, character) => {
    if (character.inFellowship) {
      acc.push(character);
    }
    return acc;
  }, []);
  return Object.assign({ members }, { fellowShipPurpose: lotrDB.fellowShipPurpose });
};

export const allCharacters = (): Character[] => {
  return lotrDB.members;
};