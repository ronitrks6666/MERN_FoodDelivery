









export const placeOrderReducer = (state={}, action)=>{
    switch(action.type){
        case 'PlACE_ORDER_REQUEST' : return{
            loading:true
        }
        case 'PlACE_ORDER_SUCCESS' : return{
            loading:false,
            success:true
        }
        case 'PlACE_ORDER_FAILED' : return{
            loading:false,
            error: action.payload
        }
        default : return state
    }

}

export const getOrderReducer = (state={},action)=>{
    switch(action.type){
        case 'GET_ORDERS_REQUEST': return{
            loading:true,
            ...state
        }
        case 'GET_ORDERS_SUCCESS':return{
            loading:false,
            orders:action.payload
        }
        case 'GET_ORDERS_FAILED': return {
            loading:false,
            error:action.payload
        }
        default :return state
    }
}