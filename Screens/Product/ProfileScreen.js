import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MainHeader from '../../Components/MainHeader';
import { useSelector, useDispatch } from 'react-redux';
import * as ApiAction from '../../Store/Action/ProductAction';
import Colors from '../../Constants/Colors';
const ProfileScreen = props => {
  const allCategories = useSelector(state => state.product.allCategories);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#333'
    },
    input: {
      borderWidth: 0.2,
      width: '90%',
      placeholderTextColor: 'grey',
      height: 40,
      marginBottom: 15,
      paddingLeft: 8,
      borderRadius: 8,
    },
    title: {
      marginTop: 30,
      fontSize: 26,
      marginBottom: 24,
      color: 'black'
    },
    button: {
      backgroundColor: '#009933',
      width: '90%',
      height: 50,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton: {
      fontSize: 20,
      margin: 10,
      color: '#fff',
    }
  });
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
      <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={{ marginLeft: 22 }}>
        <Text style={{ color: 'black', fontSize: 17 }}>Name</Text>

        <TextInput

          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={{ color: 'black', fontSize: 17 }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
        // value={senha}
        // onChangeText={setSenha}
        />
        <TouchableOpacity
          // onPress={loginUser}
          style={{
            // height: 30,
            width: 100,
            backgroundColor: Colors.primary,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View></View>
  );
};

export default ProfileScreen;

