import React, { useState } from 'react';
import {View, Text, Touchable, TouchableOpacity, Dimensions, TextInput} from 'react-native';
import Btn from './Btn';
import Icon from 'react-native-vector-icons/Ionicons';
import {air, darkair, dblu} from './Constants';
import auth from '@react-native-firebase/auth';
const Login = (props) => {
  const [email,checkEmail]=useState('');
  const [password,checkPassword]=useState('');
  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate("MainC")
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          Alert('No user found with this email address.');
        }
        if (error.code === 'auth/wrong-password') {
          Alert('The password is incorrect.');
        }
        if (error.code === 'auth/invalid-email') {
          Alert('Invalid email address.');
        }
        console.error(error);
      });
  };

  return (
    <View style={{backgroundColor: darkair}}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          NewsPunk
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: Dimensions.get('window').width,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            paddingTop: 50,
          
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkair, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <TextInput
              style={{borderRadius: 100,color: 'black', paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
              placeholderTextColor={darkair}
              placeholder="Email / Username"
              onChangeText={text=>checkEmail(text)}
              value = {email}></TextInput>
          <TextInput
              style={{borderRadius: 100,color: 'black', paddingHorizontal: 10, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
              placeholderTextColor={darkair}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={text=>checkPassword(text)}
              value = {password}></TextInput>
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 50}}>
            <Text style={{color: darkair, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
              alignItems: 'center',
              paddingBottom: 50
            }}>
             <Icon name= 'newspaper-outline' size={80} color='black'></Icon>
             <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '78%',
              paddingRight: 16,
              paddingLeft:20,
            }}>
             <Text style={{color: air, fontSize: 20, fontWeight: 900}}>Ahead in time,</Text>
             <Text style={{color: darkair, fontSize: 20, fontWeight: 900}}>ahead in the news.</Text>
          </View>
          </View>
          <Btn textColor='white' bgColor={dblu} btnLabel="Login" Press={() => {
            signIn();
          }} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center", paddingTop: 15 }}>
            <Text style={{ color: 'grey',fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkair, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
