export interface FellowShipMemberInput {
  name: string;
};

export interface FellowshipMember {
  name: string;
  weapon: string;
}

export interface Fellowship {
  members: FellowshipMember[];
  purpose: string;
}