import { GreetingInput } from './interfaces/withParams.interface';

export const greeting = (args: GreetingInput): string => {
  return `Why, hello there ${args.name}!`;
}