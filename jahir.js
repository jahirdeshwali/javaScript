import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const CalculatorScreen = () => {
    const [inputs, setInputS] = useState('')

    const [count, setCounts] = useState(0)

    const plusBtn = () => {
        setCounts(Number(count) + Number(inputs ))
    }

    const MinusBtn = () => {
        setCounts(Number(count) - Number(inputs))
    }

    const MultiplicationBtn = () => {
        setCounts(Number(count) * Number(inputs))
    }

    const DivisionBtn = () => {
        setCounts(Number(count) / Number(inputs))
    }
   

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput style={{ backgroundColor: 'white', borderColor: 'gray', borderWidth: 1, fontSize: 22 }}
            onChangeText={(text) => setInputS(text)}
            />
            <Text style={{ fontSize: 53 }}>{count}</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <TouchableOpacity onPress={() => plusBtn()} style={{ backgroundColor: 'red', width: '50%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 25, color: 'white', paddingVertical: 10 }}>+ Plus</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => MinusBtn()} style={{ backgroundColor: 'green', width: '50%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 25, color: 'white', paddingVertical: 10 }}>- Minus</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => MultiplicationBtn()} style={{ backgroundColor: 'blue', width: '50%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 25, color: 'white', paddingVertical: 10 }}>* Multiplication</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => DivisionBtn()} style={{ backgroundColor: 'orange', width: '50%', marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 25, color: 'white', paddingVertical: 10 }}>/ Division</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CalculatorScreen;