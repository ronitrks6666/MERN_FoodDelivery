import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Orders from "../components/Orders";

import { getOrdersDetail } from "../actions/orderAction";
export default function OrderScreen() {
  const orderstate = useSelector((state) => state.getOrdersDetail);
  const { loading, orders, error } = orderstate;
  console.log(orders[0])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersDetail());
  }, []);
  return (
    <div>
        hello
      <div className="row">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something Went Wrong" />
        ) : (
          orders.map((order) => {
            return (
              <div key={order._id} className="col-md-4">
                <h6>
                  <span class="badge bg-secondary">HOT</span>
                </h6>
                <div className="m">
                  <Orders order={order} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
