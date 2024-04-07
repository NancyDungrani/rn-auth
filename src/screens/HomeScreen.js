import React, { useContext, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text,TextInput, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants/index';
import ProductRow from '../screens/ProductRow';
import CartScreen from './CartScreen';
import Carousel from 'react-native-snap-carousel';
import CarouselScreen from '../innerScreens/CarouselScreen';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
  const { userInfo, isLoading, logout } = useContext(AuthContext);
  const scrollViewRef = useRef(null);
  const navigation = useNavigation();
  const navigateToCart = () => {
    navigation.navigate('CartScreen');
  };
  // const handleLogout = () => {
  //   logout(navigation);
  // };

  // Function to automatically scroll the banner every 3 seconds
  const scrollToNextBanner = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: (2|| 1) + ( 365),
        animated: true,
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(scrollToNextBanner, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Icon name='location-outline' size={28} />
          <Text style={styles.location}>Barrie, Ontario </Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}> 5 </Text>
            </View>
            <TouchableOpacity onPress={navigateToCart}>
              <Icon name="cart" size={28} />
            </TouchableOpacity>
          </View>
        </View>

        <View style = {styles.containerText}>
    <Text style= {styles.welcomeText(COLORS.black,SIZES.xSmall)}>
        Find The Most
        </Text>
    <Text style= {styles.welcomeText(COLORS.primary,0)}>
        Luxurious Furniture 
        </Text>
    </View>

    <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Icon name='search' size={24} style= {styles.searchIcon}/>
        </TouchableOpacity>
        <View style= {styles.searchWrapper}>
            <TextInput style= {styles.searchInput}
            value=''
            onPressIn={()=>("")}
            placeholder='What are you looking for'
            >
            </TextInput>
        </View>
        <View>
           <TouchableOpacity style= {styles.searchBtn}>
                <Icon name="camera" size={SIZES.xLarge} color={COLORS.white}/>

           </TouchableOpacity>
        </View>


    </View>
    {/* <CarouselScreen/> */}

      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true} // Enable snapping to each banner
      >
        <View style={styles.bannerContainer}>
          <Image source={require('../assets/banner1.jpg')} style={styles.bannerImage} />
          <Image source={require('../assets/banner2.jpg')} style={styles.bannerImage} />
          <Image source={require('../assets/banner3.jpg')} style={styles.bannerImage} />
        </View>
      </ScrollView>

      <View style={styles.containerNewRival}>
      <View  style={styles.header}>
      <Text  style={styles.hearderTitle}>New Rivals</Text>
      <TouchableOpacity>
      <Icon name='grid-outline' size={24} color={COLORS.primary}/>
      </TouchableOpacity>
      </View>
    </View>
    <ProductRow/>
      {/* <View style={styles.container}>
        <Spinner visible={isLoading} />
        <Text style={styles.welcome}>Welcome {userInfo.username}</Text>
        <Button title="Logout" color="red" onPress={handleLogout} />
      </View> */}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  searchContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium,
    marginHorizontal:SIZES.small,
    height:50,
    marginTop: SIZES.xSmall,
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

  containerNewRival:{
    marginHorizontal: 12
},
header:{
    flexDirection:"row",
    justifyContent:"space-between"
},
hearderTitle:{
    fontFamily:"semi-bold",
    fontSize: SIZES.large,
    color: COLORS.primary
},


  containerText:{
    width:"100%"
},
welcomeText: (color,top) => ({
    fontFamily:"Bold",
    fontSize:SIZES.xLarge,
    marginTop:top/2,
    color:color,
    marginHorizontal:SIZES.small
}),
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginBottom: 20,
    marginTop: 25,
    paddingRight: 20,
    
  },
  bannerImage: {
    width: 350, // Set a fixed width for each image
    height: 200,
    borderRadius: 10,
    paddingRight:20,
    marginRight : 20
  },
  section: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textStyle: {
    //fontFamily:"Bold",
    fontSize: 40
  },
  appBarWrapper: {
    marginHorizontal: 10,
    marginTop: SIZES.medium
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
    paddingLeft: 90,
    paddingRight: 90
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999
  },
  cartNumber: {
    fontFamily: "regular",
    fontWeight: 'bold',
    fontSize: 10,
    color: COLORS.lightWhite
  }
});

export default HomeScreen;
