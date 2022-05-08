import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart , deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";








export default function CartScreen() {
  const cartState = useSelector((state) => state.CartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch()
  //reduce is a javascript function which helps in sum Total
  var subtotal = cartItems.reduce((x,item)=>x+item.price , 0)
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                    <h1>{item.name} [{item.varient}]</h1>
                    <h1>Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                    <h1 style={{display:"inline"}}>Quantity : </h1> 
                    <i className="fa fa-plus" onClick={()=>{ dispatch(addToCart(item,item.quantity+1,item.varient)) }} aria-hidden="true"></i>
                    <b>{item.quantity}</b>
                    <i className="fa fa-minus"onClick={()=>{ dispatch(addToCart(item,item.quantity-1,item.varient)) }} aria-hidden="true"></i>
                    <hr />
                </div>

                <div className="m-1 w-100">
                    <img src={item.image} style={{height:'80px'}} alt="" />
                </div>

                <div className="m-1 w-100">
                <i className="fa mt-5 fa-trash" onClick={()=>{dispatch(deleteFromCart(item))}} aria-hidden="true"></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4 text-center">
          <h2 style={{fontSize:"45px"}}>SubTotal : {subtotal} /-</h2>
          <Checkout subtotal={subtotal}/>
        </div>
      </div>
    </div>
  );
}
