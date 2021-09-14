import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopColor: "rgba(255, 255, 255, 0.3)",
                    backgroundColor: "rgba(251, 250, 249, 1)",
                },
            }}
        >
            <Tabs.Screen name="Feed" component={Feed} />
            <Tabs.Screen name="Search" component={Search} />
            <Tabs.Screen name="Notifications" component={Notifications} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
    );
}
