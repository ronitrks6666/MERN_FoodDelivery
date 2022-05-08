import { use } from 'express/lib/router'
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'











export default function RegisterScreen() {
    const userState = useSelector((state) => state.registerUserReducer)

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const dispatch = useDispatch()
    const registerstate = useSelector(state=>state.registerUserReducer)
    const {error,loading,success} = registerstate
    function resgister(){
        if(password!=cpassword){
            alert("The passwords does not match please check again")
        }
        else{
            const user ={
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }

  return (
    <div className='container mt-5'>
        <div className="row justify-content-center">
            <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">

               {loading && (<Loading/>)}
               {success && (<Success/>)}
               {error && (<Error error="Email Already registered"/>)}

                <h2 className='text-center m-2' style={{fontSize:"35px"}}>Register</h2>
                <div>
                    <input required type="text" name="" id="" placeholder='name' value={name}
                    onChange={(e)=>{
                        setname(e.target.value)
                    }} className='form-control' />
                    <input required type="text" name="" id="" placeholder='email' value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }} className='form-control' />
                    <input required type="text" name="" id="" placeholder='password' value={password} 
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }} className='form-control' />
                    <input required type="text" name="" id="" placeholder='confirm password' value={cpassword}
                    onChange={(e)=>{
                        setcpassword(e.target.value)  
                    }} className='form-control' />
                    <button className="btn mt-3 mb-3" onClick={resgister}>Register</button>
                    <br />
                    <a href="/login" className="mt-3" style={{color:"black"}}>Click here to Login</a>
                </div>
            </div>
        </div>
    </div>
  )
}
