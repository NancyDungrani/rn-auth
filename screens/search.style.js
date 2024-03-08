import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.offwhite,
        top : 30
    },
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        marginHorizontal: SIZES.small,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.small/2,
        height:50
    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray,
        marginTop:SIZES.small
    },
    searchWrapper:{
        flex: 1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small
    },
    searchInput:{
        fontFamily:"regular",
        width:"100%",
        height:"100%",
        paddingHorizontal:SIZES.small
    },
    searchBtn:{
        width:50,
        height:"100%",
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.medium,
        justifyContent:'center',
        alignItems:"center"
    },
    searchImage :{
        resizeMode : "contain",
        width : SIZES.width -50,
        height : SIZES.height -100,
        alignContent : "center",
        opacity : 0.9
    },
    scrollView :{
      
        width: "100%"
     }

})
export default styles