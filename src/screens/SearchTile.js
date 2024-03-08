import { Image,StyleSheet,ScrollView, Text, View , TouchableOpacity , FlatList} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES , SHADOWS} from '../constants/index';


const SearchTile = () => {
  return (
  <View >
    <TouchableOpacity  style = {styles.container} onPress={() => {}}>
        <View style= {styles.image}>
            <Image source={require('../assets/images/Pose23.jpg')}
            style = {styles.productImg}
            />
        </View>
        <View style = {styles.textContainer}>
            <Text style ={styles.productTitle}>Product Title</Text>
            <Text style ={styles.supplier}>Product Supplier</Text>
            <Text style ={styles.supplier}>Item Price</Text>

        </View>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "space-between",
        padding : SIZES.medium,
        alignItems : "center",
        marginBottom : SIZES.small,
        flexDirection : "row",
        ...SHADOWS.medium,
        shadowColor : COLORS.lightWhite,
        backgroundColor : "#FFF",
        borderRadius : SIZES.small,
        width : 360
    },
    image : {
        width : 100,
        
        backgroundColor : COLORS.secondary,
        borderRadius : SIZES.medium,
        justifyContent : "center",
        alignItems: "center",
        
    },
    productImg:{
        width : "100%",
        height : 100,
        borderRadius : SIZES.small,
        resizeMode :"cover",
    },
    textContainer : {
        flex : 1,
        marginHorizontal : SIZES.medium,
    },
    productTitle : {
        fontFamily : "Bold",
        fontSize: SIZES.medium,
        color : COLORS.primary
    },
    supplier : {
        fontFamily : "regular",
        fontSize: SIZES.small + 2,
        color : COLORS.gray,
        marginTop : 3,
    },
  });

export default SearchTile
