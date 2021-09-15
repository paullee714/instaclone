import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { logUserIn } from "../apollo";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

const LOG_IN_MUTATION = gql`
    mutation login($username: String!, $password: String!){
        login(username: $username, password: $password){
            ok
            token
            error
        }
    }
`;

export default function Login({ route: { params } }) {
    const {
        register, handleSubmit, setValue, watch,
    } = useForm({
        defaultValues: {
            username: params?.username,
            password: params?.password,
        },
    });
    const passwordRef = useRef();
    const onCompleted = async (data) => {
        const {
            login: { ok, token },
        } = data;
        if (ok) {
            await logUserIn(token);
        }
    };
    const [logInMutation, { loading }] = useMutation(LOG_IN_MUTATION, {
        onCompleted,
    });
    const onNext = (nextOne) => {
        nextOne.current?.focus();
    };

    const onValid = (data) => {
        if (!loading) {
            logInMutation({
                variables: {
                    ...data,
                },
            });
        }
    };

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
                value={watch("username")}
                autoFocus
                autoCapitalize="none"
                placeholder="Username"
                placeholderTextColor="gray"
                returnKeyType="next"
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("username", text)}
            />
            <TextInput
                value={watch("password")}
                ref={passwordRef}
                placeholder="Password"
                placeholderTextColor="gray"
                returnKeyType="done"
                secureTextEntry
                onSubmitEditing={handleSubmit(onValid)}
                onChangeText={(text) => setValue("password", text)}
            />
            <AuthButton
                text="Log In"
                loading={loading}
                disabled={!watch("username") || !watch("password")}
                onPress={handleSubmit(onValid)}
            />
        </AuthLayout>
    );
}
