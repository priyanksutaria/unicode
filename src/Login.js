import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Dimensions} from 'react-native';
import Bground from './Bacground';
import Btn from './Btn';
import Icon from 'react-native-vector-icons/Ionicons';
import {air, darkair} from './Constants';
import Field from './Field';

const Login = (props) => {
  return (
    <Bground>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
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
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
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
          <Btn textColor='white' bgColor={darkair} btnLabel="Login" Press={() => {alert('Logged in!');props.navigation.navigate("Home")}} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center", paddingTop: 15 }}>
            <Text style={{ color: 'grey',fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkair, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Bground>
  );
};

export default Login;
