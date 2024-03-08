import { ScrollView, Text, View, TouchableOpacity, Image, TextInput} from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, BackBtn } from "../components";
import styles from "./Login.style";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { COLORS } from "../constants";

const validationSchema = Yup.object().shape({
   password: Yup.string()
      .min(8, 'Must be minimum 8 characters or more!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

const Login = ({navigation})=>{
    const [loader, setLoader] = useState(false);
    const [responseData, setResponseData] =useState(null);
    const [obsecureText,setObsecureText] = useState(false);

    return(
        <ScrollView>
            <SafeAreaView style={{marginHorizontal:20}}>
            <view>
           <BackBtn onPress={()=> navigation.goBack()}/>

           <Image
           source={require('../assets/images/bk.png')}
           style={styles.cover}
           />

           <Text style={styles.title}>
            Unlimited Luxurious Furniture
           </Text>

           <Formik initialValues={{email:'', password:''}}
           validationSchema={validationSchema}>
             {({ handleChange, touched, handleBlur, handleSubmit, values, errors, isValid, setFieldTouched }) => (
                <view>
                <view style={styles.wrapper}>
                <Text style={styles.label}>EMAIL</Text>
                <view style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
                   <MaterialCommunityIcons
                   name="email-outline"
                   size={20}
                   color={COLORS.gray}
                   style={styles.iconStyle}/>

                   <TextInput
                   placeholder="Enter email"
                   value={values.email}
                   onChangeText={handleChange('email')}
                   onFocus={()=>{
                    setFieldTouched('email')
                   }}
                   onBlur={()=>{
                    setFieldTouched('email','')
                   }}
                   autoCapitalize="none"
                   autoCorrect={false}
                   style={{flex:1}}/>
                </view>

                {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
                    
                </view>

                <view style={styles.wrapper}>
                <Text style={styles.label}>PASSWORD</Text>
                <view style={styles.inputWrapper(touched.password ? COLORS.secondary : COLORS.offwhite)}>
                   <MaterialCommunityIcons
                   name="lock-outline"
                   size={20}
                   color={COLORS.gray}
                   style={styles.iconStyle}/>

                   <TextInput
                   secureTextEntry={obsecureText}
                   placeholder="Enter password"
                   value={values.email}
                   onChangeText={handleChange('password')}
                   onFocus={()=>{
                    setFieldTouched('password')
                   }}
                   onBlur={()=>{
                    setFieldTouched('password','')
                   }}
                   autoCapitalize="none"
                   autoCorrect={false}
                   style={{flex:1}}/>

                   <TouchableOpacity onPress={()=>{
                    setObsecureText(!obsecureText)
                   }}>
                    <MaterialCommunityIcons
                    name={obsecureText ? "eye-outline":"eye-off-outline"}
                    size={18}/>

                   </TouchableOpacity>


                </view>

                {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
                    
                </view>

                <Button title={"L O G I N"} onPress={()=>{}}/>
                <Text style={styles.registration} onPress={()=>{navigation.navigate('')}}>Register</Text>
                </view>
           )}
           </Formik>
           </view>
            </SafeAreaView>
        </ScrollView>
    )
}


export default Login