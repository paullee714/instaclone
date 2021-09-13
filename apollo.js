import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
    uri: "https://615e-223-38-40-67.ngrok.io/graphql",
    cache: new InMemoryCache(),
});

export default client;
