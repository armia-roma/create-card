import React, { useState } from 'react';
import {Button, Image, StyleSheet} from 'react-native'
import Screen from './Screen';
import AppTextInput from './src/components/AppTextInput';
function LoginScreen(props) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("./src/assets/logo.png")}
            ></Image>
            <AppTextInput 
                icon="email" 
                placeholder="login"
                autoCapitalize="none"
                onChangeText={(text) =>  setEmail(text)}
                />
            <AppTextInput 
                icon="lock" 
                placeholder="login"
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(text) =>  setPassword(text)}

                />
                <Button title='Login' style={styles.button} onPress={() => console.log(email, password)}></Button>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding:10
    }, 
    logo : {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
        borderRadius: 20  
    },
    button: {
        borderRadius: 20,
        marginVertical: 10
    }
})
export default LoginScreen;