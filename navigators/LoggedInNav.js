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
                headerBackTitleVisible: false,
                headerTitle: "",
                headerTransparent: true,
                headerTintColor: "gray",
            }}
            tabBarOption={{
                style: {
                    backbroundColor: "black",
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
