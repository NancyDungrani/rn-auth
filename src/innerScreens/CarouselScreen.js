import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import ImageSlider  from 'react-native-image-slider-box'
import { COLORS, SIZES } from "../constants"
import Carousel from 'react-native-snap-carousel';



const CarouselScreen = () => {
    const slides = [ 
      { id: 1, uri: "https://www.purbafurniture.ca/wp-content/uploads/2022/05/Luxury-bedroom.png"},
      { id: 2, uri:  "https://www.purbafurniture.ca/wp-content/uploads/2022/08/bluebedroomset.jpg"},
      { id: 3, uri:  "https://www.purbafurniture.ca/wp-content/uploads/2022/07/b21431364657off549692.jpg"}
    ];
    const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.uri }} style={styles.image} />
        </View>
      );
    
      return (
        <View style={styles.container}>
          <Carousel
            data={slides}
            renderItem={renderItem}
            sliderWidth={300} // Width of the carousel
            itemWidth={200} // Width of each carousel item
            layout="default" // Type of carousel layout
            loop // Enable infinite loop
            autoplay // Enable autoplay
            autoplayInterval={3000} // Autoplay interval in milliseconds
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      item: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        padding: 20,
        marginHorizontal: 10,
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
      },
    });
    
    export default CarouselScreen;