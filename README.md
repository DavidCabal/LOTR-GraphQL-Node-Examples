# A Basic Node-GraphQL example (with Lord Of The Rings)

## Getting Started

### Prerequesites
* none
---
### Installing
* Clone repo
```bash
npm i && npm run build && npm run start
```
--OR--
* A Dockerfile is also included in case thats your jam
---
### Usage
* Navigate to http://localhost:9000/graphql to use the built in GraphQL testing tool, Graphiql.
* Look through the files in the "graphql" folder for comments and examples of implementing a basic GraphQL API.
---

## Here is a very high level and admittedly incomplete list of pros/cons to using GraphQL
### PROS
* Easily fetch multiple resources that otherwise would require the client to hit multiple endpoints.
* A cleaner representation to the client of what is available through the API.
* Analytics tools can provide great insights into what specific pieces of data are being queried in your API as well as performance for those calls.
* "Over the wire" performance is often improved since clients are only querying for exactly what they need.
### CONS
* Browser caching (that you normally get for free) is lost and must be implemented by the developer.
* API design must carefully consider query plans to ensure that complex queries don't destroy server performance. (especially a public API)
* It is another software layer that must be built and maintained.