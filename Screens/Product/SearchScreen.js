import React, { useState } from 'react';

import MainHeader from '../../Components/MainHeader';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as CartAction from '../../Store/Action/ProductAction';
import Colors from '../../Constants/Colors';
const SearchScreen = props => {
  const allCategories = useSelector(state => state.product.allCategories);
  const allProduct = useSelector(state => state.product.allPrroduct);
  const dispatch = useDispatch();
  const [serach, setSearch] = useState('');

  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
      <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />
      <View style={{ height: 50, width: '100%', padding: 5 }}>
        <TextInput
          onChangeText={text => setSearch(text)}
          style={{
            height: '100%',
            width: '100%',
            borderColor: 'lightgray',
            borderWidth: 1,
          }}
        />
      </View>
      <View
        style={{
          height: '80%',
          width: '97%',
          marginVertical: 5,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allProduct}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={itemData => {
            const addToCartHandler = () => {
              dispatch(CartAction.addToCartAction(itemData.item));
            };
            if (itemData.item.name.includes(serach)) {
              return (
                <View
                  style={{
                    height: 200,
                    width: '48%',
                    backgroundColor: 'white',
                    margin: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.18,
                    shadowRadius: 1.0,

                    elevation: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity style={{ height: '60%', width: '100%' }}>
                    <Image
                      style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'contain',
                      }}
                      source={{ uri: itemData.item.thumbNail }}
                    />
                  </TouchableOpacity>

                  <View
                    style={{
                      height: '10%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Text numberOfLines={1}>{itemData.item.name}</Text>
                    <Text
                      style={{ fontSize: 12, fontWeight: 'bold', color: 'red' }}>
                      {itemData.item.priceUnit}
                    </Text>
                  </View>

                  <View
                    style={{
                      height: '20%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <TouchableOpacity
                      onPress={addToCartHandler}
                      style={{
                        height: 30,
                        width: 100,
                        backgroundColor: Colors.primary,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        ADD TO CART
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }
          }}
        />
      </View>
    </View>
  );
};
export default SearchScreen;
