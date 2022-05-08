import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch ,useSelector } from 'react-redux'
import { placeOrder } from '../actions/orderAction'












export default function Checkout({subtotal}) {
  const dispatch=useDispatch()
  function tokenHander(token){
    console.log(token)
    dispatch(placeOrder(token,subtotal))
}
  return (
    <div>
        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHander}
        stripeKey='pk_test_51KwgQQSJ7OchCxeRVdCYV3U6rbWOVyOnaFe8Hm2cNG2N3EuhGIH0xUXVJUro6Dm7WsMbsw3R55KIgRCbEXiHoryU00OPmRPl2y'
        currency="INR"
        >
            <button className='btn'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}
