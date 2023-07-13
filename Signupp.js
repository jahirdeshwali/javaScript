import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';


const Signupp = () => {

  
  fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    }),
  })  
  .then(response => response.json())
  .then(json => {
console.log("---login".json);
  })
  .catch(error => {
    console.error(error);
  });


  
  

  return (
      <View style={{ flex: 1 }}>


         <View style={{ width: '100%', height: 400, backgroundColor: '#FF0059', borderBottomLeftRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../src/assets/image/scuter.png')} style={{ height: 260, width: 260 }} />
        </View>






        <View style={{ backgroundColor: 'white', width: '80%', height: 400, marginHorizontal: 50, marginTop: -80 }}>

          <View style={{ padding: 20 }}>
            <View>

              <TextInput style={{ backgroundColor: '#FE8A4717', padding: 10, borderRadius: 10 }}
                placeholder='Enter your number'
               
              />

              <TextInput style={{ backgroundColor: '#FE8A4717', padding: 10, borderRadius: 10 }}
                placeholder='Enter your setpassword'
               
              />

            </View>
            <View style={{ marginTop: 10 }}>
              <TextInput style={{ backgroundColor: '#FE8A4717', borderRadius: 10 }}
                placeholder='Enter your setconfirmpassword'
                
              />
            </View>

            <View>
              <TextInput style={{ backgroundColor: '#FE8A4717', padding: 10, borderRadius: 10 }}
                placeholder='Enter email/Phone no.'
                

              />


            </View>

            <View>
              <TextInput style={{ backgroundColor: '#FE8A4717', padding: 10, borderRadius: 10 }}
                placeholder='Enter email/Phone no.'
             
              />


            </View>



          </View>
          <View style={{ backgroundColor: '#FF0059', padding: 15, marginHorizontal: 30, borderRadius: 10 }} >
            <TouchableOpacity>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity >
              <Text>
                Dont have an account
              </Text>
            </TouchableOpacity>
            <Text style={{ color: 'red' }}>? Register</Text>
          </View>



        </View>

      </View>
  );
};

export default Signupp;
