import React from 'react'
import { StyleSheet } from 'react-native';
import * as Yup from "yup";
import AppForm from './src/components/AppForm';
import AppFormField from './src/components/AppFormField';
import AppFormPicker from './src/components/AppFormPicker';
import SubmitButton from './src/components/SubmitButton';
import Screen from './Screen';
const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
})
const categories = [
    { label: "Furniture", value : 1 },
    { lable: "Clothing", value : 2 },
    { lable: "Camera", value : 3 }
]
function ListEditScreen() {

  return (
    <Screen style={styles.container}>
        <AppForm
            initialValues={{
                title: "",
                price: "",
                description: "",
                category: null
            }}
            onSubmit={(values)  => console.log(values)}
            validationSchema={validationSchema}
            >
                <AppFormField
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                ></AppFormField>
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                ></AppFormField>
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                />
            </AppForm>
    </Screen>
  )
}

export default ListEditScreen