import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants';
import { AuthContext } from '../context/AuthContext';

const CartScreen = () => {
  const { getCart, removeFromCart ,userInfo} = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getCart("65eb258bd3a777b6621130f3");
       // console.log("Cart Response:", response); // Log the entire response object
        const cartData = response.data; // Access the data property
        if (cartData && cartData.length > 0) {
          setCart(cartData[0].products); // Access products array from the first element
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
  
    fetchCartItems();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.removeButton}>
                <Icon name="close-circle" size={24} color={COLORS.black} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.cartList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: SIZES.base,
  },
  cartList: {
    paddingBottom: 100,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
    marginBottom: SIZES.base,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: SIZES.h4,
    fontFamily: 'Roboto-Medium',
  },
  itemPrice: {
    fontSize: SIZES.body4,
    fontFamily: 'Roboto-Regular',
    color: COLORS.gray,
    marginTop: SIZES.base,
  },
  removeButton: {
    marginLeft: SIZES.base,
  },
});

export default CartScreen;
