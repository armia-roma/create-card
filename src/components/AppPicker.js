import React, { useState } from 'react';
import {useFonts} from 'expo-font';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { TextInput, View, StyleSheet, Text, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import AppText from './AppText';
 const items = [
     {name: "armia", id: 1},
     {name: "habib", id: 2},
     {name: "gorge", id: 3},

 ]
 function AppPicker({icon,onSelectItem, selectedItem, placeholder}) {
    const[modalVisible, setModalVisible] = useState(false)
     return (
         <>
         <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
            <View style={styles.container}>
                <MaterialCommunityIcons style={styles.icon}name="email"></MaterialCommunityIcons>
                <Text style={styles.text}>{selectedItem? selectedItem.name : placeholder}</Text>
            </View>
        </TouchableWithoutFeedback>
            <Modal visible={modalVisible}>
                <Button title="Close" onPress={() => setModalVisible(false)}></Button>
                <FlatList 
                    data={items}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <Text style={styles.itemText} onPress={() => {
                        setModalVisible(false)
                        onSelectItem(item);
                    }}>{item.name}</Text>}
                />
            </Modal>
        </>
     );
 }
 const styles = StyleSheet.create({
    icon : {
        padding:10
    },
    container: {
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#e3f4fe"
    },
    text: {
        fontSize: 18,
        fontFamily: "Inter-Black",
        fontWeight: '400'
    },
    itemText: {
        fontSize: 18,
        padding: 12,
        fontFamily: "Inter-Black",
        border: 2,
        borderColor: "red"
    }
 })
 export default AppPicker;