import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function Login({ navigation }) {
    return (
        <AuthLayout>
            <TextInput
                autoFocus
                placeholder="Username"
                placeholderTextColor="gray"
                returnKeyType="next"
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="gray"
                returnKeyType="done"
                secureTextEntry
                lastOne
            />
        </AuthLayout>
    );
}
