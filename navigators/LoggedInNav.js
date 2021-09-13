import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Feed from "../screens/Feed";

const Tabs = createBottomTabNavigator();
export default function LoggedInNav() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Feed" component={Feed} />
        </Tabs.Navigator>
    );
}
