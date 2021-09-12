import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background-color:white;
    padding: 0px 20px;
`;

const Logo = styled.Image`
    max-width:90%;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
`;

export default function AuthLayout({ children }) {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };
    return (
        <TouchableWithoutFeedback
            onPress={dismissKeyboard}
        >
            <Container>
                <Logo resizeMode="contain" source={require("../../assets/lgo_3.png")} />
                {children}
            </Container>
        </TouchableWithoutFeedback>
    );
}
