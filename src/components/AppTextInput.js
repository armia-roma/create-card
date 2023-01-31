import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

function AppTextInput({icon, placeholder, ...otherProps}) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.icon} name={icon}></MaterialCommunityIcons>
            <TextInput 
                placeholder={placeholder}
                {...otherProps}
                >
                </TextInput>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e3f4fe",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 20,
        marginBottom: 10,
        marginVertical: 20
    },
    icon: {
        padding: 15
    }
})
export default AppTextInput;