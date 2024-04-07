import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES, SHADOWS } from '../constants';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
    const { getCart, removeFromCart, userInfo } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await getCart(userInfo._id);
                if (response && response.products && response.products.length > 0) {
                    setCart(response.products);
                }
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        fetchCartItems();
    }, []);

    useEffect(() => {
        console.log("flatlist", cart);
    }, [cart]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>Your Cart</Text>
            </View>
            <View style={styles.innerContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : (
                    <FlatList
                        data={cart}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.itemContainer} onPress={()=> navigation.navigate("ProductDetails" , { item: item.cartItem })}>
                                <View style={styles.imageContainer}>
                                    <Image
                                        source={{ uri: item.cartItem.imageUrl }}
                                        style={styles.productImg}
                                    />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.productTitle}>{item.cartItem.title}</Text>
                                    <Text style={[styles.boldText, styles.supplier]}>{item.cartItem.supplier}</Text>
                                    <Text style={[styles.boldText, styles.price]}>{item.cartItem.price}</Text>
                                    <Text style={[styles.boldText, styles.quantity]}>Quantity: {item.quantity}</Text>
                                </View>
                                <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.removeButton}>
                                    <Icon name="close-circle" size={24} color={COLORS.black} />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item._id}
                        contentContainerStyle={styles.cartList}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.offwhite,
    },
    headingContainer: {
        paddingVertical: SIZES.base,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.offwhite,
        marginBottom: SIZES.base,
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: COLORS.offwhite,
        padding: SIZES.base,
        ...SHADOWS.medium,
        borderRadius: SIZES.radius,
        marginHorizontal: SIZES.base,
        marginBottom: SIZES.base,
    },
    cartList: {
        paddingBottom: 50,
    },
    itemContainer: {
      flex : 1,
      justifyContent : "space-between",
      padding : SIZES.small,
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
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImg: {
        width: '100%',
        height: '100%',
        borderRadius: SIZES.medium,
        resizeMode: 'cover',
    },
    textContainer: {
        flex: 1,
        padding: SIZES.small,
    },
    productTitle: {
        fontFamily: 'Roboto-Medium',
        fontSize: SIZES.h4,
        color: COLORS.primary,
    },
    supplier: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.body4,
        color: COLORS.gray,
        marginTop: SIZES.base,
    },
    price: {
        fontFamily: 'Roboto-Regular',
        fontSize: SIZES.body4,
        color: COLORS.gray,
        marginTop: SIZES.base,
    },
    quantity: {
        fontFamily: 'Roboto-Bold', // Make the quantity text bold
        fontSize: SIZES.body4,
        color: COLORS.gray,
        marginTop: SIZES.base,
    },
    removeButton: {
        padding: SIZES.base,
    },
    boldText: {
        fontFamily: 'Roboto-Bold', // Define a style for bold text
    },
});

export default CartScreen;
