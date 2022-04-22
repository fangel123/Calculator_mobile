import * as React from "react";
//Import Component Native Base
import { StyleSheet, View } from 'react-native';
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    IconButton,
    HStack,
    Divider,
} from "native-base";

// Import Image
import IconPlus from '../assets/plus.png'

export default function Add() {

    const plus = () => {

    }
    return (
        <Box>
            <button >
                <img src={IconPlus} width={20} height={20} />
            </button>
        </Box>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black'
    },
});