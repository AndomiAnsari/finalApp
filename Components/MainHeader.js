import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';
import MaIcon from './MaIcon';
import { useSelector } from 'react-redux';
const MainHeader = props => {
  const allCartItems = useSelector(state => state.product.myCart);

  const [secure, setSecure] = useState(true);

  return (
    <View
      style={{
        height: 60,
        width: '100%',
        backgroundColor: Colors.headerColor,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        flexDirection: 'row',
      }}>
      {/* <TouchableOpacity
        onPress={props.onBack}
        style={{
          height: '100%',
          width: '15%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {props.back && <MaIcon iconName="keyboard-backspace" />}
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={props.onBack}

        style={{
          height: '100%',
          width: '15%',

          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>

        <MaIcon iconName="arrow-left" />

      </TouchableOpacity>
      <View
        style={{
          height: '100%',
          width: '70%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{ height: 110, width: 130, resizeMode: 'contain' }}
          source={require('../Assets/Images/Logo.png')}
        />
      </View>

      <TouchableOpacity
        onPress={props.onCart}
        style={{
          height: '100%',
          width: '15%',

          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <MaIcon iconName="cart" />
        <View
          style={{
            height: 15,
            width: 15,
            backgroundColor: Colors.primary,
            bottom: 10,
            borderRadius: 50,
            right: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 10,
              color: 'white',
            }}>
            {allCartItems.length}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
