import "./App.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";






function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homescreen/>} />
          <Route path="/cart" exact element={<CartScreen/>} />
          <Route path="/login" exact element={<LoginScreen/>}/>
          <Route path="/register" exact element={ <RegisterScreen/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
