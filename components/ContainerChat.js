import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import '../assets/app.css';

let dataChat = [
  {
    key: 1,
    "from": {
      "type": "user1",
      "urlImage":'https://assets.codepen.io/3610274/internal/avatars/users/default.png?format=auto&height=512&version=1572517024&width=512'
    },
    "msg": {
      "message": "Hello",
      "date":'12:06 am'
    }
  },
  {
    key: 2,
    "from": {
      "type": "user2",
      "urlImage":'https://static.thenounproject.com/png/902162-200.png'
    },
    "msg": {
      "message": "Hello..!",
      "date":'12:06 pm'
    }
  },
  {
    key: 3,
    "from": {
      "type": "user2",
      "urlImage":'https://static.thenounproject.com/png/902162-200.png'
    },
    "msg": {
      "message": "Hello..!",
      "date":'12:08 pm'
    }
  },

];

const ContainerChat = () => {
  return (
    <View>
      {/*source={{uri: 'assets:/image/bg.jpg'}}*/}
      <ImageBackground source={require('../assets/image/bg.jpg')} style={styles.image}>
        <div className='container'>
          {dataChat.map((chat) => {
            if (chat.from.type === 'user1') {
              return (<div className="containerChat ">
                <div className='w-10'>
                  <Image style={styles.tinyLogo}
                    source={chat.from.urlImage}
                  />
                </div>
                <div className='float-rights w-90'>
                  <p className='text-right'>{chat.msg.message}</p>
                  <p className="text-right">{chat.msg.date}</p>
                </div>
              </div>)
            } else {
              return ( <div className="containerChat darker">
                <View style={styles.containerChat}>
                  <p>{chat.msg.message}</p>
                  <span className="time-left">{chat.msg.date}</span>
                </View>
                {/*<div className='w-10'>*/}
                <Image
                  style={styles.tinyLogo}
                  source={chat.from.urlImage}
                />
                {/*</div>*/}
              </div>)
            }
          })}
          {/*<div className="containerChat ">
            <div className='w-10'>
              <Image
                style={styles.tinyLogo}
                source={"https://assets.codepen.io/3610274/internal/avatars/users/default.png?format=auto&height=512&version=1572517024&width=512"}
              />
            </div>
            <div className='float-rights w-90'>
              <p className='text-right'>Hello. How are you today?</p>
              <p className="text-right">11:00</p>
            </div>
          </div>*/}
         {/* <div className="containerChat darker">
            <View style={styles.containerChat}>
              <p>Hey! I'm fine. Thanks for asking!</p>
              <span className="time-left">11:01</span>
            </View>
            <div className='w-10'>
            <Image
              style={styles.tinyLogo}
              source={"https://static.thenounproject.com/png/902162-200.png"}
            />
            </div>
          </div>*/}
        </div>
      </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text:{
    color: '#fff'
  }
});
export default ContainerChat;
