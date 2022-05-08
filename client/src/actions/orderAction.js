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

export const getOrdersDetail = () =>async(dispatch,getState)=>{
    dispatch({
        type:'GET_ORDERS_REQUEST',
    })
    const currentUser = getState().loginUserReducer.currentUser
    try {
        const response = await axios.get(`api/orders/myorders/${currentUser.email}`)
        console.log(response)
        console.log(response.data)
        dispatch({
            type:'GET_ORDERS_SUCCESS',
            payload:response.data.orders
        })
    } catch (error) {
        dispatch({
            type:'GET_ORDERS_FAILED',
            payload:error
        })
    }

}