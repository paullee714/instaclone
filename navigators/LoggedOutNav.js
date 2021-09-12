import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
            }}
        >
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{
                    headerTitle: "",
                    headerTransparent: true,
                    headerTintColor: "white",
                }}
            />
        </Stack.Navigator>
    );
}
