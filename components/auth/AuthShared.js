/* eslint-disable import/prefer-default-export */
import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    background-color: rgba(255,220,220,0.15)
    padding :15px 5px;
    margin-bottom: 8px;
    border-radius: 10px;
    margin-bottom:${(props) => (props.lastOne ? "15" : 8)}px;
`;
