"use client";
import React, { ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const Provider = ({ children }: { children: ReactNode }) => {
  const client = new ApolloClient({
    // TODO => Update the uri on production
    uri: "http://localhost:4000/graphql",
    // import.meta.env.VITE_NODE_ENV === "development"
    //   ? "http://localhost:4000/graphql"
    //   : "/graphql", // the URL of our GraphQL server.
    cache: new InMemoryCache(), // Apollo Client uses to cache query results after fetching them.
    credentials: "include", // This tells Apollo Client to send cookies along with every request to the server.
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
