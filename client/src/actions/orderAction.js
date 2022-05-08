import axios from 'axios'









export const placeOrder = (token,subtotal)=>async(dispatch,getState)=>{
    dispatch({
        type:'PlACE_ORDER_REQUEST'
    })
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().CartReducer.cartItems
    try {
        const response  = await axios.post('/api/orders/placeorder',{token,subtotal,currentUser,cartItems})
        console.log(response)
        dispatch({
            type:'PlACE_ORDER_SUCCESS'
        })
    } catch (error) {
    console.log(error)
    dispatch({
        type:'PlACE_ORDER_FAILED',
        payload:error
    })
    }
}