import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
    const { register, handleSubmit, setValue } = useForm();
    const lastNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const onNext = (nextOne) => {
        nextOne.current?.focus();
    };

    const onValid = (data) => {
        console.log(data);
    };

    useEffect(() => {
        register("firstName", {
            required: true,
        });
        register("lastName", {
            required: true,
        });
        register("email", {
            required: true,
        });
        register("username", {
            required: true,
        });
        register("password", {
            required: true,
        });
    }, [register]);

    return (
        <AuthLayout>
            <TextInput
                autoFocus
                placeholder="First name"
                placeholderTextColor="gray"
                returnKeyType="next"
                onSubmitEditing={() => onNext(lastNameRef)}
                onChangeText={(text) => setValue("firstName", text)}
            />
            <TextInput
                ref={lastNameRef}
                placeholder="Last name"
                placeholderTextColor="gray"
                returnKeyType="next"
                onSubmitEditing={() => onNext(userNameRef)}
                onChangeText={(text) => setValue("lastName", text)}
            />
            <TextInput
                ref={userNameRef}
                placeholder="Username"
                placeholderTextColor="gray"
                returnKeyType="next"
                onSubmitEditing={() => onNext(emailRef)}
                onChangeText={(text) => setValue("username", text)}
            />
            <TextInput
                ref={emailRef}
                placeholder="Email"
                placeholderTextColor="gray"
                keyboardType="email-address"
                returnKeyType="next"
                autoCapitalize="none"
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("email", text)}
            />
            <TextInput
                ref={passwordRef}
                autoCapitalize="none"
                placeholder="Password"
                placeholderTextColor="gray"
                returnKeyType="done"
                secureTextEntry
                lastOne
                onChangeText={(text) => setValue("password", text)}
                onSubmitEditing={handleSubmit(onValid)}
            />
            <AuthButton
                text="Create Account"
                onPress={handleSubmit(onValid)}
                loading
            />
        </AuthLayout>
    );
}
