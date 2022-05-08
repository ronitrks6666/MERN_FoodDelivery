export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  if (quantity > 10 ) {
    alert("You cant add more than 10 quantity");
  } else {
      if(quantity<1){
        dispatch({
            type: "DELETE_FROM_CART",
            payload: pizza,
          });
          const cartItems = getState().CartReducer.cartItems;
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
      else{
        dispatch({
            type: "ADD_TO_CART",
            payload: cartItem,
          });
      }
    

    // here we are getting whole state of the cart items and then storing it into the local storage
    const cartItems = getState().CartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
};

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_FROM_CART",
    payload: pizza,
  });
  const cartItems = getState().CartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
