import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import MainHeader from '../../Components/MainHeader';
import { useSelector, useDispatch } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';
import Colors from '../../Constants/Colors';
import * as CartAction from '../../Store/Action/ProductAction';
const HomeScreen = props => {
  const allCategories = useSelector(state => state.product.allCategories);
  const allProduct = useSelector(state => state.product.allPrroduct);
  const dispatch = useDispatch();

  const imageArray = [
    'https://cdn.pixabay.com/photo/2018/08/08/16/17/shoes-3592530__340.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082__340.jpg',
    'https://cdn.pixabay.com/photo/2016/01/26/21/57/wedding-rings-1163321__340.jpg',
  ];

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />
      <SliderBox
        images={imageArray}
        sliderBoxHeight={120}
        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor={Colors.primary}
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: 'rgba(128, 128, 128, 0.92)',
        }}
        ImageComponentStyle={{ borderRadius: 10, width: '97%', marginTop: 5 }}
        imageLoadingColor="#2196F3"
      />
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text
          style={{
            marginTop: 5,
            fontSize: 12,
            color: 'black',
            fontWeight: 'bold',
          }}>
          CATEGORIES
        </Text>
        <View
          style={{
            height: 80,
            width: '97%',
            marginVertical: 5,
          }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={allCategories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={itemData => {
              return (
                <TouchableOpacity
                  style={{
                    height: 70,
                    width: 70,

                    marginHorizontal: 5,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: '70%',
                      width: '100%',
                    }}>
                    <Image
                      style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'cover',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                      }}
                      source={{ uri: itemData.item.imageUrl }}
                    />
                  </View>

                  <View
                    style={{
                      height: '30%',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{ fontSize: 10, fontWeight: '600', color: 'black' }}>
                      {itemData.item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: 'black',
            fontWeight: 'bold',
          }}>
          ALL PRODUCTS
        </Text>

        <View
          style={{
            height: '62%',
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

              return (
                <View
                  style={{
                    height: 250,
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
                        marginTop: 20,
                        height: '80%',
                        width: '100%',
                        resizeMode: 'contain',
                      }}
                      source={{ uri: itemData.item.thumbNail }}
                    />
                  </TouchableOpacity>
                  <Text style={{ margin: 'auto', width: '90%', fontSize: 13, fontWeight: '400', color: 'black' }}>
                    {itemData.item.name}</Text>
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
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;
