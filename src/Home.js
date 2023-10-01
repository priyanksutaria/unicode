import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background1 from './Background';

const Home = (props) => {
  return (
    <Background1>
       <View style={{
       }}>
        <Text style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginVertical: 200,
            paddingLeft: 30,
        }}>Home Screen</Text>
       </View>
    </Background1>
  );
}

const styles = StyleSheet.create({})

export default Home;
