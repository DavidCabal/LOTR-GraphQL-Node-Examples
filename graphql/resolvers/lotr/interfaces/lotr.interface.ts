export interface CharacterInput {
  name: string;
};

export interface Character {
  name: string;
  weapon: string;
  inFellowship: boolean;
}

export interface Fellowship {
  members: Character[];
  fellowShipPurpose: string;
}