import { FellowShipMemberInput, FellowshipMember, Fellowship } from "./interfaces/lotr.interface";
import { lotrDB } from '../../../fakeDB/lotr';

export const getFellowshipMember = (args: FellowShipMemberInput): FellowshipMember => {
  const member = lotrDB.members.find(member => member.name.toLowerCase() === args.name.toLowerCase());
  if (member) {
    return member;
  } else {
    throw new Error(`No entry found for name: ${args.name}`);
  }
};

export const getFellowship = (): Fellowship => {
  return lotrDB;
};