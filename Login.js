
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';


const Login = () => {
  

    return (

        <View
            style={{
                flex: 1
            }}>
            <View style={{ height: 400, width: '100%', backgroundColor: '#FF0059', borderBottomLeftRadius: 100 }}>
                <View style={{ padding: 10, }}>
                    <Image source={require('../src/assets/image/Vector.png')} style={{ height: 30, width: 30 }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../src/assets/image/plate.png')} style={{ height: 260, width: 260 }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', width: '80%', height: 400, mtarginTop: -1, padding: 10 }}>

                        <Text style={{ fontSize: 30, color: 'black', padding: 12 }}>Login</Text>

                        <View style={{ marginHorizontal: 20, backgroundColor: '#FE8A4717' }}>
                            <TextInput
                                placeholder='username'
                                
                            />

                        </View>
                        <View style={{ marginHorizontal: 20, backgroundColor: '#FE8A4717', marginTop: 20, }}>
                            <TextInput
                                placeholder='password'
                              
                            />

                        </View>
                        <Text style={{ left: 200, top: 10 }}>Forgot Password</Text>




                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ padding: 10 }}>
                                <Image source={require('../src/assets/image/Facebook.png')} style={{ height: 31, width: 31 }} />
                            </View>

                            <View style={{ padding: 10 }}>
                  
                                <Image source={require('../src/assets/image/google.png')} style={{ height: 38, width: 38 }} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#FF0059', marginHorizontal: 20, borderRadius: 20 }}>
                            <TouchableOpacity onPress={() => LoginApiBtn()}>
                                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', padding: 13, }}>
                                    LOGIN
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontSize: 15 }}>Dont’t have an account </Text>
                            <Text style={{ color: '#FF0059', fontSize: 15 }}>? Register</Text>
                        </View>

                    </View>
                </View>



            </View>

        </View>

    );

};

export default Login;
