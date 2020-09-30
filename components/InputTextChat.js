import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import '../assets/app.css';


const keyPress = (event) => {

  /* this line will solve your error */

  event.persist();
  console.log(event);
}
const InputTextChat = () => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={value}
      onKeyPress = {keyPress}
      plase
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width:'60%',
    margin:10,
    borderRadius:40/2,
    overflow: 'hidden',
    ':hover': {
      color: 'blue',
      borderRadius:40/2,
      borderWidth: 1,
    }
  }
});
export default InputTextChat;
