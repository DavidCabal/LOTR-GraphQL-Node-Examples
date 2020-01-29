"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const graphql_1 = require("graphql");
// Construct a schema, using GraphQL schema language
const schema = graphql_1.buildSchema(`
  type Query {
    hello: String
  }
`);
// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!';
    },
};
const app = express_1.default();
app.use('/graphql', express_graphql_1.default({
    schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(9000);
console.log('Running a GraphQL API server at http://localhost:9000/graphql');
//# sourceMappingURL=index.js.map