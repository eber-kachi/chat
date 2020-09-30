import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import '../assets/app.css';
import InputTextChat from "./InputTextChat";

const FooterChat = () => {
  return (
    <View>
      <div className='footerChat'>
        <InputTextChat/>
      </div>
    </View>
  );
};
const styles = StyleSheet.create({
  containerChat: {
    width: '90%'
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    // borderStyle:'solid',
    borderColor: 'red',
    overflow: 'hidden',
    borderWidth: 2,
  },

});


export default FooterChat;
