import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { BASE_URL } from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const register = (username, email, location, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/register`, {
        username,
        email,
        location,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);

        Alert.alert('Success!', `User was successfully created! Please go to Login page to login with new Credentials`);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        Alert.alert(`Voila, you are successfully logged in!`);
      })
      .catch((e) => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = async () => {
    setIsLoading(true);

    try {
      AsyncStorage.removeItem('userInfo');
      console.log('User data cleared successfully');
      setUserInfo({});
      setIsLoading(false);
    } catch (error) {
      console.error('Error logging out:', error);
      setIsLoading(false);
    }
  };

  const getAllProducts = () => {
    return new Promise((resolve, reject) => {
      setIsLoading(true);

      axios
        .get(`${BASE_URL}/products`)
        .then((res) => {
          let products = res.data;
          setProducts(products);
          setIsLoading(false);
          console.log(products);
          resolve(products);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
          setIsLoading(false);
          reject(error);
        });
    });
  };

  const searchProducts = (searchKey) => {
    return new Promise((resolve, reject) => {
      setIsLoading(true);

      axios
        .get(`${BASE_URL}/products/search/${searchKey}`)
        .then((res) => {
          let products = res.data;
          setIsLoading(false);
          console.log(products);
          resolve(products);
        })
        .catch((error) => {
          console.error('Error searching products:', error);
          setIsLoading(false);
          reject(error);
        });
    });
  };

  // Function to add item to the cart
  const addToCart = async (userId, cartItem, quantity) => {
    setIsLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/cart`, { userId, cartItem, quantity });
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      setIsLoading(false);
    }
  };

  // Function to get cart items
  const getCart = async (userId) => {
    setIsLoading(true);
  
    try {
      const res = await axios.get(`${BASE_URL}/cart/find/${userId}`);
      console.log("nancyyy",res)
      const cartData = res.data;
      setIsLoading(false);
      console.log("nancy 2" ,cartData.products)
      return cartData.products || []; // Return products array from cartData, or an empty array if undefined
    } catch (error) {
      console.error('Error getting cart items:', error);
      setIsLoading(false);
      return []; // Return empty array in case of error
    }
  };

  // Function to delete item from the cart
  const deleteCartItem = async (cartItemId) => {
    setIsLoading(true);

    try {
      const res = await axios.delete(`${BASE_URL}/cart/${cartItemId}`);
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error deleting cart item:', error);
      setIsLoading(false);
    }
  };

  // Function to decrement quantity of item in the cart
  const decrementCartItem = async (userId, cartItem) => {
    setIsLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/cart/quantity`, { userId, cartItem });
      console.log(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error decrementing cart item quantity:', error);
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        products,
        register,
        login,
        logout,
        getAllProducts,
        searchProducts,
        addToCart,
        getCart,
        deleteCartItem,
        decrementCartItem,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
