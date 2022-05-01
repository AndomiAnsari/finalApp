// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import MainHeader from '../../Components/MainHeader';
// import { useSelector, useDispatch } from 'react-redux';
// import * as ApiAction from '../../Store/Action/ProductAction';
// import Colors from '../../Constants/Colors';
// const ProductDetailScreen = props => {
//     const allCategories = useSelector(state => state.product.allCategories);
//     const dispatch = useDispatch();



//     return (
//         <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
//             <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />
//             <Text style={{ color: 'black', fontSize: 30 }}>ProductDetailScreen</Text>

//         </View>  
//     );
// };

// export default ProductDetailScreen;


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
} from 'react-native';
import MainHeader from '../../Components/MainHeader';
const ProductDetail = ({ route }) => {

    // constructor(props) {
    //     super(props);
    // }

    // const { navigation } = props;
    console.log(route.params.product, 'route.params.productId')
    const product = route.params.product;
    const clickEventListener = () => {
        Alert.alert("Success", "Product has beed added to cart")
        // console.log(props.test)
    }


    // render() {
    return (<>
        <MainHeader onCart={() => props.navigation.navigate('cartScreen')} />

        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
                    <Image style={styles.productImg}
                        source={{ uri: product.thumbNail }}
                    />

                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.category}>{product.category}</Text>
                    <Text style={styles.description}>
                        {product.description}
                    </Text>
                </View>
                {/* <View style={styles.starContainer}>
                    <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
                    <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
                    <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
                    <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
                    <Image style={styles.star} source={{ uri: "https://img.icons8.com/color/40/000000/star.png" }} />
                </View>
                <View style={styles.contentColors}>
                    <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#00BFFF" }]}></TouchableOpacity>
                    <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#FF1493" }]}></TouchableOpacity>
                    <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#00CED1" }]}></TouchableOpacity>
                    <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#228B22" }]}></TouchableOpacity>
                    <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#20B2AA" }]}></TouchableOpacity>
                    <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#FF4500" }]}></TouchableOpacity>
                </View> */}
                {/* <View style={styles.contentSize}>
                        <TouchableOpacity style={styles.btnSize}><Text>S</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnSize}><Text>M</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnSize}><Text>L</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnSize}><Text>XL</Text></TouchableOpacity>
                    </View>
                    <View style={styles.separator}></View>*/}
                <View style={styles.addToCarContainer}>
                    <TouchableOpacity style={styles.shareButton} onPress={() => clickEventListener()}>
                        <Text style={styles.shareButtonText}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View></>
    );
    // }
}

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    productImg: {
        width: 250,
        height: 250,

    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: 'bold'
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: 'bold'
    },
    description: {
        textAlign: 'center',
        marginTop: 10,
        color: "#696969",
    },
    star: {
        width: 40,
        height: 40,
    },
    btnColor: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginHorizontal: 3
    },
    btnSize: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: '#778899',
        borderWidth: 1,
        marginHorizontal: 3,
        backgroundColor: 'white',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    starContainer: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentColors: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    contentSize: {
        justifyContent: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    separator: {
        height: 2,
        backgroundColor: "#eeeeee",
        marginTop: 20,
        marginHorizontal: 30
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    addToCarContainer: {
        marginHorizontal: 30
    }
});    