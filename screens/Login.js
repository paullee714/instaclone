import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function Login() {
    const { register, handleSubmit, setValue } = useForm();
    const passwordRef = useRef();
    const onNext = (nextOne) => {
        nextOne.current?.focus();
    };

    const onValid = (data) => { console.log(data); };

    // eslint-disable-next-line no-undef
    useEffect(() => {
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
                autoCapitalize="none"
                placeholder="Username"
                placeholderTextColor="gray"
                returnKeyType="next"
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("username", text)}
            />
            <TextInput
                ref={passwordRef}
                placeholder="Password"
                placeholderTextColor="gray"
                returnKeyType="done"
                secureTextEntry
                onSubmitEditing={handleSubmit(onValid)}
                onChangeText={(text) => setValue("password", text)}
            />
            <AuthButton text="Log In" disabled={false} onPress={handleSubmit(onValid)} />
        </AuthLayout>
    );
}
