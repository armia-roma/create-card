import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Button, Image, Text, TouchableWithoutFeedbackBase, TouchableNativeFeedback, TouchableOpacity, FlatList} from 'react-native';
import Screen from './Screen';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
function TestSnipt(props) {
    const [imageUri, setImageUri ] = useState([])
    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted) alert("You need to enable permission")
    };
    useEffect(() => {
        requestPermission();
    }, [])
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if(!result.canceled) {
                let lastElement = result.assets[result.assets.length - 1]
                setImageUri( old => [...old, {url :lastElement.uri, index: imageUri.length}]
                    )
            }
        } catch (error) {
            console.log(error)
        }
        
    }
    const handleRemoveItem = (e) => {
        const filterData = imageUri.filter(item => e.index !== item.index) 
        setImageUri(filterData)
    }
    return (
        <Screen style={{padding: 10}}>
            <View style={{flexDirection : "row", padding: 2}}>
                <TouchableOpacity onPress={selectImage}>
                    <View style={{backgroundColor: "#F3F3F3", width: 100, height: 100, borderRadius: 15, justifyContent:"center", alignItems: "center"}}>
                        <MaterialCommunityIcons name='camera-plus' size={30} >
                        </MaterialCommunityIcons>
                    </View>
                </TouchableOpacity>
                <FlatList
                    style={{paddingLeft: 10}}
                    data={imageUri}
                    keyExtractor={item => item.index.toString()}
                    horizontal
                    renderItem={({item})  => 
                    <TouchableOpacity 
                        onPress={ () => {
                            const filterData = imageUri.filter(e => e.index !== item.index) 
                            setImageUri(filterData)
                        }
                        }
                        ><Image 
                            source={{uri: item.url}} 
                            style={{ width: 100, height: 100, borderRadius: 12}}
                            >
                        </Image>
                    </TouchableOpacity> }
                />
               

            </View>
            <Button title='Select Image' onPress={selectImage}></Button>
            {/* <Image source={{uri : imageUri}} style={{ width: 200, height: 200}}></Image> */}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default TestSnipt;