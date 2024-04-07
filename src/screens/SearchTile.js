import { Image,StyleSheet,ScrollView, Text, View , TouchableOpacity , FlatList} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES , SHADOWS} from '../constants/index';
import { useNavigation } from '@react-navigation/native';



const SearchTile = ({item}) => {
    const navigation = useNavigation();
  return (
  <View >
    <TouchableOpacity  style = {styles.container} onPress={()=> navigation.navigate("ProductDetails" , {item})}>
        <View style= {styles.image}>
            <Image
                source={{uri : item.imageUrl}}
                style = {styles.productImg}
                />
        </View>
        <View style = {styles.textContainer}>
            <Text style ={styles.productTitle}>{item.title}</Text>
            <Text style ={styles.supplier}>{item.supplier}</Text>
            <Text style ={styles.price}>{item.price}</Text>

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
        width : 360,
        marginHorizontal: SIZES.small,
        
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
