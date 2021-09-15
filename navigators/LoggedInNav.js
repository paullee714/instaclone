import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "expo-vector-icons";
import React from "react";
import Feed from "../screens/Feed";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

const Tabs = createBottomTabNavigator();
export default function LoggedInNav() {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarShowLabel: true,
                tabBarStyle: {
                    // borderTopColor: "rgba(255, 255, 255, 0.3)",
                    borderTopColor: "gray",
                    backgroundColor: "rgba(251, 250, 250, 0.3)",
                },
            }}
        >
            <Tabs.Screen
                options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />) }}
                name="Feed"
                component={Feed}
            />
            <Tabs.Screen name="Search" component={Search} />
            <Tabs.Screen name="Notifications" component={Notifications} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
    );
}
