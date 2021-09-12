import React from "react";
import {
    Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback,
} from "react-native";
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
            style={{ flex: 1 }}
            onPress={dismissKeyboard}
        >
            <Container>
                <KeyboardAvoidingView
                    style={{ width: "100%" }}
                    behavior="padding"
                    keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
                >
                    <Logo resizeMode="contain" source={require("../../assets/lgo_3.png")} />
                    {children}
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    );
}
