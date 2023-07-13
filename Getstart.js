import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Getstart = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}>

      <LinearGradient  colors={['#F4C21087', '#FF4500']}>
        <View style={{ alignItems: 'center', height: 300, width: '100%', justifyContent: 'center' }}>

          <Image source={require("../assets/image/pizza.png")} style={{ height: 200, width: 200 }} />
        </View>

      </LinearGradient>
      <View style={{ marginTop: 30 }}>
        <Text style={{ textAlign: 'center', fontSize: 30, color: 'black' }}>Order from a wide range </Text>
        <Text style={{ textAlign: 'center', fontSize: 30, color: 'black' }}>of restaurants </Text>
      </View>
      <Text style={{ marginTop: 20, textAlign: 'center', color: 'black' }}>Ready from a wide range of resturants</Text>

      <View style={{ backgroundColor: '#FF0059', marginHorizontal: 35, marginTop: 30, borderRadius: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={{ color: 'white', padding: 20, textAlign: 'center', fontSize: 25 }}>GET STARTED</Text>
        </TouchableOpacity>

      </View>


    </View>
  );
};

export default Getstart;