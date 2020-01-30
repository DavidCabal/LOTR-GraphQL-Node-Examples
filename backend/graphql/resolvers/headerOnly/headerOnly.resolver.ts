export const greetingWithHeaderValue = (request): string => {
  const name = request.get('name');
  return `Hello ${name}! Your name was pulled from the request header.`;
};