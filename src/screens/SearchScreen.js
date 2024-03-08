import React, {useContext , useState} from 'react';
import { Button, StyleSheet, Text,TextInput, View, ScrollView, Image, SafeAreaView, TouchableOpacity , FlatList } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/index';
import SearchTile from './SearchTile';



const SearchScreen = ({navigation}) => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  const [searchKey , setSearchKey] = useState('');
  const [searchResults , setSearchResults] = useState(['']);
  return (
   
    <SafeAreaView style = {styles.container}>
    <View style={styles.searchContainer}>
     <TouchableOpacity>
         <Icon name="camera-outline" size={SIZES.xLarge} style= {styles.searchIcon}/>
     </TouchableOpacity>
     <View style= {styles.searchWrapper}>
         <TextInput style= {styles.searchInput}
         value={searchKey}
         onChangeText={setSearchKey}
         placeholder='What are you looking for'
         />
       
     </View>
     <View>
        <TouchableOpacity style= {styles.searchBtn} onPress={() => {}}>
             <Icon name='search' size={25} color={COLORS.offwhite}/>
        </TouchableOpacity>
     </View>

 </View>

 {searchResults.length == 0 || searchKey.length == 0  ? (
   <View style = {{flex : 1 }}>
       <Image source={require('../assets/images/Pose23.jpg')}
       style = {styles.searchImage}
       />
   </View>
 ) : (
   <ScrollView horizontal={true} overScrollMode={'auto'} style={styles.scrollView}  >
   <FlatList
  data={searchResults}
  renderItem={({ item }) => <SearchTile product={item} />}
  keyExtractor={(item, index) => (item._id ? item._id.toString() : index.toString())}
/>

   </ScrollView>
 )}


 </SafeAreaView>

  );
};

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
});

export default SearchScreen;
