import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = (username, email, location , password) => {
    setIsLoading(true);

    axios
      .post(`${BASE_URL}/register`, {
        username,
        email,
       location,
       password
      })
      .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);

        Alert.alert(
          "Success!",
          `User was successfully created! Please go to Login page to login with new Credentials`
        );

      })
      .catch(e => {
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
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        Alert.alert(
          `Voila, you are successfully logged in!`
        );
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logoutOLD = () => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.access_token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };


  
const logout = async () => {
  const id = await AsyncStorage.getItem('id')
  const useId = `user${JSON.parse(id)}`;
  setIsLoading(true);
  
  try {

    // Clear user data from AsyncStorage
   // await AsyncStorage.multiRemove([useId , 'id','userInfo']);
   AsyncStorage.removeItem('userInfo');
    console.log('User data cleared successfully');
    setUserInfo({});
    setIsLoading(false);
    console.log("user token while async clears", userInfo.token)
    
  } catch (error) {
    console.error('Error logging out:', error);
    setIsLoading(false);
    // Handle errors gracefully here, such as displaying an error message to the user
  }
};

  // const isLoggedIn = async () => {
  //   try {
  //     setSplashLoading(true);

  //     let userInfo = await AsyncStorage.getItem('userInfo');
  //     userInfo = JSON.parse(userInfo);

  //     if (userInfo) {
  //       setUserInfo(userInfo);
  //     }

  //     setSplashLoading(false);
  //   } catch (e) {
  //     setSplashLoading(false);
  //     console.log(`is logged in error ${e}`);
  //   }
  // };

  // useEffect(() => {
  //   isLoggedIn();
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
