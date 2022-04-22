import * as React from "react";
//Import Component Native Base
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

// Import Component
import Add from './Calculate/Add'

export default function Container() {
    return (
        <View>
            <Box>
                <VStack space={2} mt={5}>
                    <FormControl >
                        <FormControl.Label _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}>
                            Calculator App
                        </FormControl.Label>
                        <Input />
                    </FormControl>
                </VStack>
                <HStack justifyContent="center" alignItems="center">
                    <Add />
                </HStack>
            </Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0891b2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxInput: {
        borderWidth: "2",
        borderColor: '#0891b2'
    }
});