import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/index';

// import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
//   const navigation = useNavigation();
  return (
    <TouchableOpacity >
        <View style={styles.container}>
            <View style={styles.imageContainers}>
            <Image source={require('../../fn3.jpg')} style={styles.image} />

            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Product Title</Text>
                <Text style={styles.supplier} numberOfLines={1}>Product Supplier</Text>
                <Text style={styles.price}>Item Price</Text>

            </View>

            <TouchableOpacity style = {styles.addBtn}>
              <Icon name="add-circle" size={30} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>

    </TouchableOpacity>
  
  )
}


const styles = StyleSheet.create({

    container:{
        width:179,
        height: 215,
        marginEnd:22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
        justifyContent: "center"
        
    },
    imageContainers:{
        flex: 1,
        width:167,
        marginLeft:SIZES.small/2,
        marginRight:SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow:"hidden",
       
    },
    image:{
        width: 167,
        height: 167, // Set a fixed height to ensure the image is visible
        aspectRatio:1,
        resizeMode:'cover'
    },
    details:{
        padding: SIZES.small,
    },
    title:{
        fontFamily:"Bold",
        fontSize:SIZES.large,
        marginBottom: 2
    },
    supplier:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        color:COLORS.gray
    },
    price:{
        fontFamily:"medium",
        fontSize:SIZES.medium,
            },
    addBtn:{
        position:"absolute",
        bottom:SIZES.xSmall,
        right: SIZES.xSmall,
    }
});

export default ProductCardView
