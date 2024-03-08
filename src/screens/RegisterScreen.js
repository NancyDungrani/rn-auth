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
import { COLORS, SIZES } from '../constants/index';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [location, setLocation] = useState(null);
  const { isLoading, register } = useContext(AuthContext);

  const handleRegister = () => {
    register(username, email, location, password); // Call the register function from AuthContext
    // Navigate to the home screen after registration
  };

  return (
    <ImageBackground
      source={require('../assets/banner3.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
      <View style={styles.introContainer}>
      <Text style={styles.introTextWelcome}>Don't Have An Account</Text>
      <Text style={styles.introText}>Register Here!</Text>
    </View>
        <Spinner visible={isLoading} />
        <View style={styles.wrapper}>
          <TextInput
            style={[styles.input, username ? styles.inputWithContent : null]} 
            value={username}
            placeholder="Enter username"
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            style={[styles.input, email ? styles.inputWithContent : null]} 
            value={email}
            placeholder="Enter email"
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={[styles.input, password ? styles.inputWithContent : null]} 
            value={password}
            placeholder="Enter password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />

          <TextInput
            style={[styles.input, location ? styles.inputWithContent : null]} 
            value={location}
            placeholder="Enter location"
            onChangeText={(text) => setLocation(text)}
          />

          <TouchableOpacity
            style={styles.btnStyle}
            onPress={handleRegister}
          >
            <Text style={styles.btnText}>R  E  G  I  S  T  E  R</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },
  introText: {
    fontSize: SIZES.xLarge+10,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  introTextWelcome: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.black,
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
  inputWithContent: {
    backgroundColor: COLORS.white,
  },
  input: {
    marginBottom: 12,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: SIZES.medium,
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.xSmall,
  },
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
  link: {
    color: COLORS.black,
  },
});

export default RegisterScreen;
