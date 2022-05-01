import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import MainHeader from '../../Components/MainHeader';
import { useSelector, useDispatch } from 'react-redux';
import * as ApiAction from '../../Store/Action/ProductAction';
import Colors from '../../Constants/Colors';
const ProductDetailScreen = props => {
    const allCategories = useSelector(state => state.product.allCategories);
    const dispatch = useDispatch();



    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
            <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />
            <Text style={{ color: 'black', fontSize: 30 }}>ProductDetailScreen</Text>

        </View>
    );
};

export default ProductDetailScreen;

