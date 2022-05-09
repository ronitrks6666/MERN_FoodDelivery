import React from "react";






export default function Orders({ order }) {
  return (
    <div className="border rounded mx-auto" style={{width:"90%"}}>
      <div className="orderHead border-bottom p-2">
        <div className="row">
          <div className="col-3">Order #49373</div>
          <div className="col-7">16'MAR 22</div>
          <div className="col">Amount: {order.orderAmount} Rs </div>
        </div>
      </div>

      {/* {order.orderItems[0].name} */}
      <div className="row text-center">
        <div className="col-5">
          {order.orderItems.map((order) => {
            return (
              <div className="row">
                <div className="col">
                  <img src={order.image} style={{ height: "80px" }} alt="" />
                </div>
                <div className="col">
                  <h5>Name : {order.name} </h5>
                  <p>
                    Qty : {order.quantity}{" "}
                    <span> Varient : {order.varient} </span>{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-3">
          {order.shippingAddress.street}
        </div>
        <div className="col-4">
        {order.isDelivered ?  <strong style={{color:"green"}}>Delivered</strong> : <strong style={{color:"red"}}>Order is getting prepaired</strong> }
        </div>
      </div>
    </div>
  );
}
