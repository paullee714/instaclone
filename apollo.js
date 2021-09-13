import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token) => {
    await AsyncStorage.multiSet([
        ["token", token],
        ["loggedIn", "yes"],
    ]);
    isLoggedInVar(true);
    tokenVar(token);
};

const client = new ApolloClient({
    uri: "https://da72-220-78-93-216.ngrok.io/graphql",
    cache: new InMemoryCache(),
});

export default client;
