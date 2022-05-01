import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MaIcon = props => {
  return (
    <View>
      <Icon
        name={props.iconName}
        color={props.color ? props.color : 'black'}
        size={props.size ? props.size : 20}
      />
    </View>
  );
};
export default MaIcon;
