import React, { useState } from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const calculater = () => {
const [input,setinput] = useState ('')
const [count,setcount] = useState (0)
const plusBtn = () =>{
  setcount(Number(count)+(input))

}
const MinusBtn = () =>{
  setcount(Number(count) - (input))

}
const Multiplication = () =>{
  setcount(Number(count) * (input))

}

const Division = () => {
  setcount(Number(count) / (input))

}


  return (
    <View style={{ flex: 1,padding:20}}>
            <TextInput style={{backgroundColor:'aqua',borderColor:'gray',borderWidth:1,fontSize:20}} 
            onChangeText={(Text)  => setinput(Text)}
            
            />
            <Text style={{fontSize:53}}>{count}</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
    <TouchableOpacity onPress={() => plusBtn()} style={{backgroundColor:'red',width:'50%',marginTop:20}}>
        <Text style={{textAlign:'center',fontSize:25,color:'white',paddingVertical:10}}>plusBtn </Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=> MinusBtn()} style={{backgroundColor:'green',width:'50%',marginTop:20}}>
        <Text style={{textAlign:'center',color:'white',fontSize:25,paddingVertical:10}}>   MinusBtn </Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=> Multiplicationbtn()} style={{backgroundColor:'blue',width:'50%',marginTop:20}}>
        <Text style={{textAlign:'center',color:'white',fontSize:25,paddingVertical:10}}> Multiplication </Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=> Division()} style={{backgroundColor:'black',width:'50%',marginTop:20}}>
        <Text style={{textAlign:'center',color:'white',fontSize:'25',paddingVertical:10}}> Division</Text>
    </TouchableOpacity>

    </View>

    </View>
  );
};

export default calculater;