import React, { useState } from 'react';
import {Text, View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';


const Calender = () => {

    const [selected, setSelected] = useState('');

  return (
    <View
      style={{
        flex: 1,backgroundColor:'pink'}}>
   

   <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />


    </View>
  );
};

export default Calender;