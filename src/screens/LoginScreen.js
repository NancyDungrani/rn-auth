import React, { useContext, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';
import { COLORS, SIZES } from '../constants/index'; // Import colors and sizes from your constants

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { isLoading, login } = useContext(AuthContext);

  const handleLogin = () => {
    login(email, password); // Call the login function from AuthContext
    // Navigate to the home screen after login
  };

  return (
    <ImageBackground
    source={require('../assets/banner3.jpg')}
    style={styles.background}
    resizeMode="cover"
  >
    {/* Welcome intro */}
    <View style={styles.introContainer}>
      <Text style={styles.introTextWelcome}>Welcome to</Text>
      <Text style={styles.introText}>Home Haul</Text>
    </View>
      <View style={styles.container}>
        <Spinner visible={isLoading} />
        <View style={styles.wrapper}>
          <TextInput
            style={[styles.input, email ? styles.inputWithContent : null]} 
            value={email}
            placeholder="Enter email"
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
           style={[styles.input, email ? styles.inputWithContent : null]} 
            value={password}
            placeholder="Enter password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />

<TouchableOpacity
            style={styles.btnStyle} // button style
            onPress={handleLogin}
          >
            <Text style={styles.btnText}>L  O  G  I  N</Text> 
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginTop: 10 ,alignContent:'center'}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  btnText:{
    fontFamily:"Bold",
    color: COLORS.white,
    fontSize: 18
},
btnStyle:{
    height: 50,
    width: "100%",
    marginVertical: 20,
    backgroundColor : COLORS.primary,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12
},

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  wrapper: {
    width: '80%',
  },
  introContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },
  introText: {
    fontSize: SIZES.xxLarge,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  introTextWelcome: {
    fontSize: SIZES.xLarge+8,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  inputWithContent: {
    backgroundColor: COLORS.white, // Apply different background color when there is content
  },
  input: {
    marginBottom: 12,
    borderWidth: 2,
    borderColor: COLORS.primary, // Use gray color for border
    borderRadius: SIZES.medium,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.xSmall,
  },
  link: {
    color: COLORS.black, // Use primary color for link
    alignContent:'center'
  },
});

export default LoginScreen;
