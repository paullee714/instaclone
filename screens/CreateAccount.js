import React, { useRef } from "react";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

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
        </AuthLayout>
    );
}
