import React from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import '../assets/app.css';

const NavChat = (props) => {

  return (
    <View>
      <div className='chat-header'>
        <div className='user'>
          <Image style={styles.userImage}
            source={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"}
          />
          <span className='text-dangers'>{props.nameUser}</span>
        </div>
        <div className='buscar'>
          <Image
            style={styles.iconBuscar}
            source={"https://w7.pngwing.com/pngs/538/818/png-transparent-computer-icons-magnifying-glass-desktop-search-desktop-wallpaper-black-and-white-tool.png"}
          />
        </div>
      </div>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',

    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    // paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 8,
    // height: 200
  },
  userImage: {
    width: 30,
    height: 30,
  },
  iconBuscar:{
    width: 20,
    height: 20,
  },
  button: {
    alignItems: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#FFFFFF',
    padding: '2%',
    width: '48%',
    height: 80,
    marginBottom: 10,
    marginRight: '1%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  submitText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    textAlignVertical: 'center',
  }
});

export default NavChat;
