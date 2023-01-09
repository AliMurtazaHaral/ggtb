import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  
} from "react-native-responsive-dimensions";
import { Divider, Tab } from 'react-native-elements';
import Tabs from '../routes/Tabs';
import BackgroundScreen from './BackgroundScreen';
import FoodMenuScreen from '../screens/FoodMenuScreen';
import DrinksMenuScreen from '../screens/DrinksMenuScreen';
import OrdersScreen from '../screens/OrdersScreen';
import {
  NavigationContainer
} from '@react-navigation/native';
import { auth } from '../firebase/Config';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './WelcomeScreen';
const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();

  const handleSubmitPress = async() => {
    setErrortext('');
    try {
      const doLogin = await auth().signInWithEmailAndPassword(userEmail, userPassword);
      if (doLogin.user) {
        navigation.navigate('Home');
        alert('Signed In Successfully');
      }
    } catch (e) {
      Alert.alert("Failed");
    }
  };
  return (
    <View  >
      
    
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/logo_GT.png')}
                style={
                  styles.imgLogo
                }
              />
            </View>
           <View style= {styles.loginbox}>
            <View style={styles.SectionStyle1}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="grey"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="grey"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <Text
              style={styles.forgetpassword}
              onPress={() => navigation.navigate('Tabs')}>
              Forget Password?
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {handleSubmitPress()}}>
              <Text style={styles.buttonTextStyle}>Sign In</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
           <Divider style={{ backgroundColor: 'black', width: 150, height: 1, marginLeft: 30 , marginRight: 10}} />
           <Text> or </Text>
           <Divider style={{ backgroundColor: 'black', width: 150, height: 1, marginLeft: 10 }} />
           </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Don't have an Account?
            </Text>
            <Text
              style={styles.signupTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              Sign Up
            </Text>
            </View>
            </View>
          </KeyboardAvoidingView>
        </View>
     
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  loginbox: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 60,
    backgroundColor: 'white',
    height: responsiveHeight(40), 
    width: responsiveWidth(100), 
  },
  imgLogo:{
      marginTop:100,
      marginLeft:30,
      height:200,
      width:300,
      marginBottom:50

  },
    mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
    alignContent: 'center',
  },

  SectionStyle: {
    flexDirection: 'row',
    height: 55,
    marginTop: 5,
    marginLeft: 25,
    marginRight: 25,
    margin: 10,
    
  },
  SectionStyle1: {
    
    flexDirection: 'row',
    height: 55,
    marginTop: 30,
    marginLeft: 25,
    marginRight: 25,
    margin: 10,
    
  },
  buttonStyle: {
    backgroundColor: 'black',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: 'black',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'Black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    alignSelf: 'center',
    marginLeft: 70,
    marginTop: 4,
    
  },
  signupTextStyle: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 14,
    fontWeight :'bold',
    alignSelf: 'center',
    marginLeft: 20,
    marginTop: 4,
    
  },
   forgetpassword: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 14,
    alignSelf: 'center',
    marginLeft: 100,
    marginRight: -130,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});