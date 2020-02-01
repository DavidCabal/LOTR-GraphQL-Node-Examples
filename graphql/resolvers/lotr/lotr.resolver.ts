import { CharacterInput, Character, Fellowship } from "./interfaces/lotr.interface";
import { lotrDB } from '../../../fakeDB/lotr';

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