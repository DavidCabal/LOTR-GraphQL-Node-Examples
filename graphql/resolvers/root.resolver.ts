import { basicFunctionWithNoParams } from './noParams/noParams.resolver';
import * as withParams from './withParams/withParams.resolver';
import { greetingWithHeaderValue } from './headerOnly/headerOnly.resolver';
import * as lotrResolver from '../resolvers/lotr/lotr.resolver';

export const root = {
  hardCodedResponse: () => {
    return basicFunctionWithNoParams();
  },
  responseWithParam: (args) => {
    return withParams.greeting(args);
  },
  greetingWithHeaderValue: (_, request) => {
    return greetingWithHeaderValue(request);
  },
  character: (args) => {
    return lotrResolver.getCharacter(args);
  },
  fellowship: () => {
    return lotrResolver.getFellowship();
  },
  allCharacters: () => {
    return lotrResolver.allCharacters();
  }
};