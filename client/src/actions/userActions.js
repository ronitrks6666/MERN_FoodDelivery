import axios from 'axios'








export const registerUser=(user)=>async dispatch=>{
    dispatch({
        type:"USER_REGISTER-REQUEST"
    })

    try {
       const response = await axios.post("/api/users/register" , user)
       console.log(response)
        dispatch({
            type:"USER_REGISTER-SUCCESS"
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type:"USER_REGISTER-FAILED",
            
            payload:error
        })
    }
}

export const loginUser=(user)=> async dispatch=>{
    dispatch({
        type:"USER_LOGIN-REQUEST"
    })

    try {
       const response = await axios.post("/api/users/login" , user)
       console.log(response)
        dispatch({
            type:"USER_LOGIN-SUCCESS",
            payload:response.data
        })
        localStorage.setItem("currentUser" , JSON.stringify(response.data))
        window.location.href='/'
    } catch (error) {
        console.log(error)
        dispatch({
            type:"USER_LOGIN-FAILED",
            
            payload:error
        })
    }
}

export const logoutUser = ()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href="/login"
}
