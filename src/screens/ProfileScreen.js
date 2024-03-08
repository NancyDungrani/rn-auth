import React, {useContext} from 'react';
import { Button, StyleSheet, Text,TextInput, View, ScrollView, Image, SafeAreaView, TouchableOpacity , Alert } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/index';

const ProfileScreen = ({ navigation }) => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);


  const handleLogout = () => {
    logout(navigation);
  };
  
 
  
  const logoutFunc = () =>{
    Alert.alert(
      "Logout",
      "Are you sure you want to logout",
      [
        {
          text : "Cancel" , onPress:()=> console.log("Cancel pressed")
        },{
          text : "Continue" , onPress:()=> handleLogout()
         
        },
        // {
        //   defaultIndex : 1
        // }
      ]
    )
  }
  
  const clearCache = () =>{
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all saved data on your device",
      [
        {
          text : "Cancel" , onPress:()=> console.log("Cancel clear cache")
        },{
          text : "Continue" , onPress:()=> console.log("Clear Cache pressed")
  
        },
        // {
        //   defaultIndex : 1
        // }
      ]
    )
  }
  
  const deleteAccount = () =>{
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account",
      [
        {
          text : "Cancel" , onPress:()=> console.log("Cancel pressed")
        },{
          text : "Continue" , onPress:()=> console.log("Delete account pressed")
  
        },
        // {
        //   defaultIndex : 1
        // }
      ]
    )
  }
  
  
    return (
      <View style = {styles.container}>
        <View style = {styles.container}>
            <View style = {{width : '100%'}}>
              <Image
                source={require('../assets/images/space.jpg')}
                style = {styles.cover}
              />
            </View>
            <View style = {styles.profileContainer}>
            <Image
                source={require('../assets/images/profile.jpeg')}
                style = {styles.profile}
              />
              <Text style={styles.name}>
                 Welcome {userInfo.username}! 
              </Text>
              <Text style={styles.name}>
                 Shop Best Furniture In Canada On HomeHaul
              </Text>
       
                  <View></View>
                
          
                <View style ={styles.menuWrapper}>
                  <TouchableOpacity onPress={()=>('')}>
                    <View style={styles.menuItem(0.5)}>
                      <Icon
                        name = "heart-outline"
                        size = {24}
                        color={COLORS.primary}
                      />
                      <Text style={styles.menuText}>Favorties</Text>
  
                    </View>
  
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>('')}>
                    <View style={styles.menuItem(0.5)}>
                      <Icon
                        name = "receipt"
                        size = {24}
                        color={COLORS.primary}
                      />
                      <Text style={styles.menuText}>Orders</Text>
  
                    </View>
  
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{}}>
                    <View style={styles.menuItem(0.5)}>
                      <Icon
                        name = "bag"
                        size = {24}
                        color={COLORS.primary}
                      />
                      <Text style={styles.menuText}>Cart</Text>
  
                    </View>
  
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>clearCache()}>
                    <View style={styles.menuItem(0.5)}>
                      <Icon
                        name = "refresh"
                        size = {24}
                        color={COLORS.primary}
                      />
                      <Text style={styles.menuText}>Clear Cache</Text>
  
                    </View>
  
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>deleteAccount()}>
                    <View style={styles.menuItem(0.5)}>
                      <Icon
                        name = "remove"
                        size = {24}
                        color={COLORS.primary}
                      />
                      <Text style={styles.menuText}>Delete Account</Text>
  
                    </View>
  
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> logoutFunc()}>
                    <View style={styles.menuItem(0.5)}>
                      <Icon
                        name = "log-out"
                        size = {24}
                        color={COLORS.primary}
                      />
                      <Text style={styles.menuText}>Logout</Text>
  
                    </View>
  
                  </TouchableOpacity>
                </View>

            </View>
        </View>
      </View>
    );

};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : COLORS.lightWhite
},
cover :{
    height : 200,
    width :"100%",
    resizeMode : "cover"
},
profileContainer : {
    flex:1,
    alignItems : "center"
},
profile:{
    height : 155,
    width : 155,
    borderRadius : 999,
    borderColor : COLORS.primary,
    resizeMode : "cover",
    marginTop : -80,
    borderWidth : 2,
},
name:{
    fontFamily : "Bold",
    color : COLORS.primary,
    marginVertical : 5,
    alignItems:'center'
},
loginBtn :{
    backgroundColor : COLORS.secondary,
    padding : 2,
    borderWidth : 0.4,
    borderColor : COLORS.primary,
    borderRadius : SIZES.xxLarge
},
menuText : {
    fontFamily : "regular",
    color : COLORS.gray,
    marginLeft: 20,
    fontWeight: '600',
    fontSize : 14,
    lineHeight:26
},
menuWrapper:{
    width: SIZES.width -SIZES.large,
    backgroundColor : COLORS.lightWhite,
    borderRadius : 12
},
menuItem : (borderBottomWidth) => ({
    borderBottomWidth : borderBottomWidth,
    flexDirection :"row",
    paddingVertical : 15,
    paddingHorizontal: 30,
    borderColor: COLORS.gray

})
});

export default ProfileScreen;
