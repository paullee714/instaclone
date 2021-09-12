import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { colors } from "../colors";

const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background-color:white;
`;

const Logo = styled.Image`
    max-width:80%;

`;

const CreateAccount = styled.View`
    background-color:${colors.blue};
    padding: 5px 10px;
    border-radius: 10px;
`;
const CreateAccountText = styled.Text`
    color: white;
    font-weight: 600;
`;

const LoginLink = styled.Text`
    color: ${colors.blue};
    font-weight: 500;
    margin-top: 10px;
`;

// eslint-disable-next-line no-unused-vars
export default function Welcome({ navigation }) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("Login");
    return (
        <Container>
            <Logo resizeMode="contain" source={require("../assets/lgo_3.png")} />
            <TouchableOpacity onPress={goToCreateAccount}>
                <CreateAccount>
                    <CreateAccountText>Create Account</CreateAccountText>
                </CreateAccount>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToLogin}>
                <LoginLink>Login</LoginLink>
            </TouchableOpacity>
        </Container>

    );
}
