import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const TextInput = styled.TextInput`
    background-color: rgba(255,220,220,0.15)
    padding :15px 5px;
    margin-bottom: 8px;
    border-radius: 10px;
    margin-bottom:${(props) => (props.lastOne ? "15" : 8)}px;
`;

export default function CreateAccount() {
    const lastNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const onNext = (nextOne) => {
        nextOne.current?.focus();
    };

    const oneDone = () => {
        // eslint-disable-next-line no-alert
        // eslint-disable-next-line no-undef
        alert("Done!");
    };

    return (
        <AuthLayout>
            <KeyboardAvoidingView
                style={{ width: "100%" }}
                behavior="padding"
                keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
            >
                <TextInput
                    autoFocus
                    placeholder="First name"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    onSubmitEditing={() => onNext(lastNameRef)}
                />
                <TextInput
                    ref={lastNameRef}
                    placeholder="Last name"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    onSubmitEditing={() => onNext(userNameRef)}
                />
                <TextInput
                    ref={userNameRef}
                    placeholder="Username"
                    placeholderTextColor="gray"
                    returnKeyType="next"
                    onSubmitEditing={() => onNext(emailRef)}
                />
                <TextInput
                    ref={emailRef}
                    placeholder="Email"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() => onNext(passwordRef)}
                />
                <TextInput
                    ref={passwordRef}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    returnKeyType="done"
                    secureTextEntry
                    onSubmitEditing={oneDone}
                    lastOne
                />
                <AuthButton text="Create Account" disabled onPress={() => null} />
            </KeyboardAvoidingView>
        </AuthLayout>
    );
}
