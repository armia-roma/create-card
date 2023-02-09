import React from 'react';
import {Button, Image, StyleSheet} from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from './src/components/ErrorMessage';
import Screen from './Screen';
import AppTextInput from './src/components/AppTextInput';
import AppText from './src/components/AppText'
import AppFormField from './src/components/AppFormField';
import AppButton from './src/components/AppButton';

import SubmitButton from './src/components/SubmitButton';
import AppForm from './src/components/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})
function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("./src/assets/logo.png")}
            ></Image>
            <AppForm
                initialValues={{ email: '', password: ''}}
                onSubmit={values => console.log(values) }
                validationSchema={validationSchema}
            >
                <AppFormField 
                    icon="email" 
                    placeholder="login"
                    autoCapitalize="none"
                    name="email"
                    />
                <AppFormField 
                    icon="lock" 
                    placeholder="password"
                    autoCapitalize="none"
                    secureTextEntry
                    name="password"
                    />
                <SubmitButton title="Login" />
            </AppForm>
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