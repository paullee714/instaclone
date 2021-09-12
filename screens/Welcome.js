import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { colors } from "../colors";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";

const LoginLink = styled.Text`
    color: ${colors.blue};
    font-weight: 500;
    margin-top: 13px;
`;

// eslint-disable-next-line no-unused-vars
export default function Welcome({ navigation }) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("Login");
    return (
        <AuthLayout>
            <AuthButton text="Create New Account" disabled={false} onPress={goToCreateAccount} />
            <TouchableOpacity onPress={goToLogin}>
                <LoginLink>Login</LoginLink>
            </TouchableOpacity>
        </AuthLayout>

    );
}
