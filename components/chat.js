import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NavChat from "./navChat";
import ContainerChat from "./ContainerChat";




const Chat=()=>{
  return (
    <View>
      <NavChat nameUser={"eber kachi nina"}/>
      <ContainerChat/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});



export default Chat;
