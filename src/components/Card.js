import React, { useState } from 'react';
import { View ,Image, StyleSheet,Text, TouchableOpacity} from 'react-native';

function Card(props) {
    
    return (
        <View
            style={styles.container}
        >
            <View style={styles.imageView}>
                {/* <Image style={styles.image} source={require("./../../assets/chair.jpg")}></Image> */}
            </View>
           <View style={styles.body}>
               <View style={styles.firstChild}>
                <Text style={styles.title}>Chair</Text>
                <Text style={styles.description}> this product with the detials of price and image satsfiay chair wood material</Text>
                   <Text style={styles.price}> $250</Text>
               </View>
               <View>
              </View>
              </View>
        </View>
              
           
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        height: 300,
        marginBottom: 20,
        
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 15,
        
    },
    body: {
        flex: 1,
        borderColor:"#000000",
        borderWidth: 1,
        
    },
    imageView: {
        flex: 1,
        padding: 20,
        paddingHorizontal: 40,
        backgroundColor: "#f4f4f4",
        borderColor:"#000000",
        borderWidth: 1,
    },
    firstChild: {
        height: 200,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderColor:"#000000",
        borderWidth: 1,
        
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#333',
        alignSelf: "flex-start",
        borderColor:"#000000",
        borderWidth: 1,
        marginLeft: 15
    },
    description: {
       fontSize: 18,
       marginVertical: 12,
       paddingHorizontal: 12,
       color: "#333",
       borderColor:"#000000",
        borderWidth: 1,
       
    },
    price: {
        fontSize: 32,
        fontWeight: "bold"
    }
})
export default Card;