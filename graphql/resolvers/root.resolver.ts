import { basicFunctionWithNoParams } from './noParams/noParams.resolver';
import * as withParams from './withParams/withParams.resolver';
import { greetingWithHeaderValue } from './headerOnly/headerOnly.resolver';
import * as lotrResolver from '../resolvers/lotr/lotr.resolver';

/*
  You could build every function directly into one file but that will quickly get
  out of hand. Having a root resolver that aggregates all your resolvers helps
  you to keep your project cleaner.
*/

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