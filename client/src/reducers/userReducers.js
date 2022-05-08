










export const registerUserReducer = (state={}, action)=>{
    switch(action.type){
        case 'USER_REGISTER_REQUSET' : return{
            loading:true
        }
        case 'USER_REGISTER-SUCCESS' : return{
            loading:false,
            success:true
        }
        case 'USER_REGISTER-FAILED' : return{
            loading:false,
            error: action.payload
        }
        default : return {loading:false}
    }

}

export const loginUserReducer =(state={} , action)=>{
    switch(action.type){
        case 'USER_LOGIN_REQUSET' : return{
            loading:true
        }
        case 'USER_LOGIN-SUCCESS' : return{
            loading:false,
            success:true,
            currentUser:action.payload
        }
        case 'USER_LOGIN-FAILED' : return{
            loading:false,
            error: action.payload
        }
        default : return state
    }
}