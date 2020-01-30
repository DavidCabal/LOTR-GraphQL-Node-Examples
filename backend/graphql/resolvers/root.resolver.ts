import { basicFunctionWithNoParams } from './noParams/noParams.resolver';
import * as withParams from './withParams/withParams.resolver';
import { greetingWithHeaderValue } from './headerOnly/headerOnly.resolver';

export const root = {
  hardCodedResponse: () => {
    return basicFunctionWithNoParams();
  },
  responseWithParam: (args) => {
    return withParams.greeting(args);
  },
  greetingWithHeaderValue: (_, request) => {
    return greetingWithHeaderValue(request);
  }
};