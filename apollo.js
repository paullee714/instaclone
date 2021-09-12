import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://615e-223-38-40-67.ngrok.io/graphql",
    cache: new InMemoryCache(),
});

export default client;
