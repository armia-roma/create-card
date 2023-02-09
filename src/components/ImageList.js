import React, { useRef } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ImageInput from './ImageInput';

function ImageList({imageUris = [], onRemoveImage, onAddImage}) {
    const scrollView = useRef()
    
    return (
        <ScrollView 
            horizontal 
            ref={scrollView} 
            onContentSizeChange={() => scrollView.current.scrollToEnd()
            }>
            <View style={styles.container}>
                {imageUris.map((uri) => (
                    <ImageInput
                        imageUri={uri}
                        key={uri}
                        onChangeImage={() => onRemoveImage(uri)}
                    />
                ))}
                <ImageInput onChangeImage={uri => onAddImage(uri)}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
});

export default ImageList;