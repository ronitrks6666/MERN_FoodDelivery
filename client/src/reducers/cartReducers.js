











export const CartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alradyExists = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (alradyExists) {
        return {
          ...state,

          // changing the existing item with action.payload or else adding new item
          cartItems: state.cartItems.map(item => item._id === action.payload._id ? action.payload : item)
        }
      } else {
        return {
          ...state,
          //sending already exist cartItems with the new cart item getting from the payload
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_FROM_CART": return{
      ...state ,
      cartItems:state.cartItems.filter(item => item._id !== action.payload._id)
    }
    default:
      return state;
  }
};
