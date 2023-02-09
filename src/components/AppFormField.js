import React from 'react';
import { useFormikContext } from 'formik';
import ErrorMessage from "./ErrorMessage"
import AppTextInput from "./AppTextInput"
function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
        <AppTextInput 
            {...otherProps}
            onBlur={() => setFieldTouched(name) }
            onChangeText={handleChange(name)}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;