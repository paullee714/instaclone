import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
    return (
        <View>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
                <View>
                    <Text>Go To Create Account</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
