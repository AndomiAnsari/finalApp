import React from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import MainHeader from '../../Components/MainHeader';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../Constants/Colors';
import * as CartItemAction from '../../Store/Action/ProductAction';
const CartScreen = props => {
  const allCartItems = useSelector(state => state.product.myCart);

  const dispatch = useDispatch();

  const renderCartList = itemData => {
    const deleteCartItem = () => {
      dispatch(CartItemAction.deleteCartItem(itemData.item.id));
    };

    return (
      <View
        style={{
          height: 100,
          width: '100%',
          marginVertical: 10,
          borderBottomColor: 'lightgray',
          borderWidth: 0.5,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '100%',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{ height: '90%', width: '90%', resizeMode: 'contain' }}
            source={{ uri: itemData.item.thumbNail }}
          />
        </View>

        <View
          style={{
            height: '90%',
            width: '60%',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 13, fontWeight: '600', color: 'black' }}>
            {itemData.item.name}
          </Text>
          <Text
            style={{ fontSize: 13, fontWeight: 'bold', color: Colors.primary }}>
            {itemData.item.priceUnit}
          </Text>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>
            {`QTY: ${itemData.item.quantity}`}
          </Text>
          <Button

            onPress={deleteCartItem} title="Delete Cart Item" />
        </View>

        <View style={{ height: '90%', width: '10%' }}></View>
      </View>
    );
  };
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
      <MainHeader onBack={() => props.navigation.navigate('homeScreen')} />
      <View
        style={{
          height: '90%',
          width: '100%',

          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <View style={{ height: '100%', width: '100%' }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={allCartItems}
            renderItem={renderCartList}
          />
        </View>
      </View>
    </View>
  );
};
export default CartScreen;
