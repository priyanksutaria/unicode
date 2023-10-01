import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Bground from './Bacground';
import Btn from './Btn';
import Field from './Field';
import { air,darkair, dblu } from './Constants';

const Signup = props => {
  return (
    <Bground>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 470,
            width: Dimensions.get('window').width,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            paddingTop: 50,
          
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
              alignItems: 'center'
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
             <Text style={{color: darkair, fontSize: 20, fontWeight: 900}}>FOR THE STORY,</Text>
             <Text style={{color: air, fontSize: 20, fontWeight: 900}}>FOR THE TRUTH</Text>
          </View>
          </View>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          </View>
          <View style={{
            width: Dimensions.get('window').width,

          
            alignItems: 'start',
          }}>
          <View style={{ backgroundColor: 'white',
            height: 230,
            width: Dimensions.get('window').width,}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: dblu, fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: dblu, fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <View style={{
            alignItems: 'center',
          }}>
         <Btn
            textColor="white"
            bgColor={dblu}
            btnLabel="Signup"
            Press={() => {
              alert('Accout created successfully!');
              props.navigation.navigate('Home');
            }}
          />
         </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'grey',fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkair, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
            </View>
            </View>
          </View>
      </View>
    </Bground>
  );
};

export default Signup;
