import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from '../components/Error'
import Loading from '../components/Loading'






export default function LoginScreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch()
  const loginstate = useSelector((state)=>state.loginUserReducer)
  const {loading ,error} = loginstate
  useEffect(() => {
    if(localStorage.getItem('currentUser')){
      window.location.href='/'
    }
  }, [])
  


  function login() {
    if (password == " ") {
      alert("The passwords can not be empty");
    } else {
      const user = {
        email,
        password
      };
      console.log(user);
      dispatch(loginUser(user));
    }
  }
  return (
    <div className="container mt-5 shadow-lg p-3 mb-5 bg-white rounded">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>
          {loading && (<Loading/>)}
          {error && (<Error error="Email/password not valid"/>)}
          <div>
            <input
              required
              type="text"
              name=""
              id=""
              placeholder="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="form-control"
            />
            <input
              required
              type="text"
              name=""
              id=""
              placeholder="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="form-control"
            />

            <button className="btn mt-3 mb-3" onClick={login}>
              Login
            </button>
            <br />
            <a href="/register" className="mt-3" style={{color:"black"}}>Click here to register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
