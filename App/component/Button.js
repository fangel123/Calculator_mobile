import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import { textAlign } from "styled-system";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 8;

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 25
    },
    textSecondary: {
        color: "#fff"
    },
    button: {
        backgroundColor: "#333333",
        flex: 1,
        height: Math.floor(buttonWidth - 5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 5,
        textAlign: "center"
    },
    buttonDouble: {
        width: screen.width / 2.2 - 10,
        flex: 0,
        alignItems: "flex-start",
        paddingLeft: 125
    },
    buttonSecondary: {
        backgroundColor: "#f09a36"
    },
    buttonSpecial: {
        backgroundColor: "#e63946"
    },
    buttonAccent: {
        backgroundColor: "#f09a36"
    }
});

export default ({ onPress, text, size, theme }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === "double") {
        buttonStyles.push(styles.buttonDouble);
    }

    if (theme === "secondary") {
        buttonStyles.push(styles.buttonSecondary);
        textStyles.push(styles.textSecondary);
    }
    if (theme === "special") {
        buttonStyles.push(styles.buttonSpecial);
        textStyles.push(styles.textSecondary);
    } else if (theme === "accent") {
        buttonStyles.push(styles.buttonAccent);
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
};