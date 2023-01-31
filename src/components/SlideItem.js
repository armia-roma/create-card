import React from 'react';
import { Dimensions, View , Image, StyleSheet,Text} from 'react-native';
const {width,height} = Dimensions.get('screen'); 
function SlideItem({item}) {
    return (
        <View style={styles.container}>
            <Image source={item.img} style={styles.image}/>
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        flex: 0.6,
        width: '100%',
      },
    container: {
        width,
        height,
        alignItems: 'center',
      },
    content: {
        flex: 0.4,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#333"
    },
    description: {
        fontSize: 18,
        marginVertical: 12,
        color: '#333',
    },
    price: {
        fontSize: 32,
        fontWeight: 'bold',
    }
})
export default SlideItem;