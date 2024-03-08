import { StyleSheet } from "react-native"
import { COLORS,SIZES } from "../constants"

const styles = StyleSheet.create({
    cover:{
        height: SIZES.height/2.4,
        width: SIZES.width-16,
        resizeMode : "contain",
        marginBottom: SIZES.xxLarge

    },
    title:{
        fontFamily: "Bold",
        fontSize:SIZES.large,
        color: COLORS.primary,
        alignItems:"center",
        marginBottom: SIZES.xxLarge,
    },

    wrapper:{
        marginBottom:20,
        //marginHorizontal:20,
    },
    
    label:{
    fontSize:SIZES.xSmall,
    marginBottom:5,
    marginEnd:5,
    fontFamily:"regular",
    textAlign:"right"
    
    },
    
    inputWrapper: (borderColor)=>({
    borderColor: borderColor,
    backgroundColor:COLORS.lightWhite,
    borderWidth:1,
    height:50,
    borderRadius:12,
    flexDirection:'row',
    paddingHorizontal:15,
    alignItems:"center"
    
    }),
    
    iconStyle:{
        marginRight:10
    },
    
    errorMessage:{
        color:COLORS.red,
        fontFamily:"regular",
        marginTop: 5,
        marginLeft : 5,
        fontSize: SIZES.xSmall,
    
    },
    
    registration: {
        marginTop:0,
    textAlign:"center"
    }
})

export default styles