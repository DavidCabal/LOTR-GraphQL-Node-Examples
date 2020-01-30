import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './graphql/root.schema';
import { root } from './graphql/resolvers/root.resolver';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(9000);
console.log('Basic GraphQL server is running at http://localhost:9000/graphql');