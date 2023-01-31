import React, { useRef } from 'react';
import {FlatList, View, Animated} from 'react-native'
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const data = [
    {
        id: 1,
        img: require('./../assets/watch7.jpeg'),
        title: 'Apple Watch Series 7',
        description: 'The future of health is on your wrist',
        price: '$399',
    },
    {
        id: 2,
        img: require('./../assets/airpods.jpeg'),
        title: 'AirPods Pro',
        description: 'Active noise cancellation for immersive sound',
        price: '$249',
    },
    {
        id: 2,
        img: require('./../assets/chair.jpg'),
        title: 'Chair',
        description: 'The Furnture of Wood Made',
        price: '$249',
    },
    
]
function Slider(props) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = event => {
        Animated.event(
            [
                {
                    nativeEvent : {
                        contentOffset: {
                            x: scrollX
                        }
                    }
                }
            ],
            {
                useNativeDriver: false
            }
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => <SlideItem item={item}/>}
                horizontal
                pagingEnabled
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
            />
            <Pagination data={data} scrollX={scrollX}/>
        </View>
    );
}

export default Slider;