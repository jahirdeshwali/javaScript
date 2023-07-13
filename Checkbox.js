import React, { useState } from 'react';
import { TouchableOpacity, View,Image} from 'react-native';
import Imagepath from '../coman/Imagepath';
import Colorpath from '../coman/Colorpath';

const Checkbox = () => {


const [redio,setredio] =useState()

const [check ,setcheck] = useState ()



  return (
   <View style={{flex:1,backgroundColor:'pink',padding:20}}>

    <TouchableOpacity onPress={()=>setredio(!redio)}>

    </TouchableOpacity>
    
<TouchableOpacity onPress={() =>setcheck(!check)}>

</TouchableOpacity>

   </View>





  );
};

export default Checkbox;