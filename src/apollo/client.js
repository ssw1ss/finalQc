import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:8000/___graphql",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }),
  cache: new InMemoryCache(),
  fetch
})
