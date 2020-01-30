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
  fellowshipMember: (args) => {
    return lotrResolver.getFellowshipMember(args);
  },
  fellowship: () => {
    return lotrResolver.getFellowship();
  }
};