import React from 'react';
import {View, ImageBackground} from 'react-native';

const Bground = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require("./assets/balloon.jpg")} style={{ height: '65%' }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}
export default Bground;
