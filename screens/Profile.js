import React from "react";
import { Text, View } from "react-native";

export default function Profile() {
    return (
        <View style={{
            backgroundColor: "white",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            <Text style={{ color: "black" }}>Hello Profile</Text>
        </View>
    );
}
