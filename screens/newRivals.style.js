import { StyleSheet } from "react-native"
import { COLORS,SIZES } from "../constants/index"

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.lightWhite,
        
    },
    wrapper : {
        flex : 1,
        backgroundColor : COLORS.lightWhite,
        
    },
    upperRow : {
        width : SIZES.width -40,
        marginHorizontal : SIZES.large,
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems : "center",
        position : "absolute",
        backgroundColor : COLORS.primary,
        top : SIZES.large,
        borderRadius : SIZES.large,
        zIndex : 999
    },
    heading : {
        fontFamily : "semi-bold",
        fontSize : SIZES.medium,
        color : COLORS.lightWhite,
        marginLeft : 5
    }
})
export default styles