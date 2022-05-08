import React from "react";
import Pizza from "../components/Pizza";
//import pizzas from '../pizzasdata'
import { useEffect } from "react";






//this helps to use the store in our application
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;  



  
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <Loading/>
        ) : error ? ( 
          <Error error="Something Went Wrong"/>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div key={pizza._id} className="col-md-4">
                <h6><span class="badge bg-secondary">HOT</span></h6>
                <div className="m">
                  <Pizza  pizza={pizza} /> 
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
