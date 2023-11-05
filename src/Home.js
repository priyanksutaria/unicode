import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { darkair } from './Constants';

const Home = (props) => {
  return (<View style={{backgroundColor: 'white'}}>
        <View style={{
            alignItems: 'center',
            paddingTop: Dimensions.get('window').height*0.4
          }}>
            <Text style={{fontSize: 40, color: darkair, fontWeight: 'bold'}}>HomeScreen</Text>
          </View>
  </View>);
}

const styles = StyleSheet.create({})

export default Home;
