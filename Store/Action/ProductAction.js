import {BaseUrl} from '../../Constants/BaseUrl';
import {
  addToCartActionConst,
  cartQtyAction,
  deleteCartItemActionConst,
} from '../Action/ProductActionConstants';

export const addToCartAction = item => {
  return async dispatch => {
    dispatch({
      type: addToCartActionConst.ADD_TO_CART_SUCC,
      cartItem: item,
    });
  };
};

export const deleteCartItem = id => {
  return async dispatch => {
    dispatch({
      type: deleteCartItemActionConst.DELETE_CART_ITEM,
      itemId: id,
    });
  };
};

export const userSignUpAction = (email, password) => {
  return async dispatch => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'session=eyJ1c2VyRW1haWwiOiJUZXN0MTIzNDVAZ21haWwuY29tIn0=; session.sig=rPHXjrOcmwIuMqpV5WtpLLvMIIA',
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('http://54.67.81.85:3000/users', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');

    // var raw = JSON.stringify({
    //   email: email,
    //   password: password,
    //   userType: 'publisher',

    // });

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    // };

    // fetch(`${BaseUrl}/users/signup`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.statusCode === 400) {
    //       alert('Please enter a valid email');
    //     } else {
    //       alert('user created');
    //     }
    //   })
    //   .catch(error => console.log('error', error));
  };
};
