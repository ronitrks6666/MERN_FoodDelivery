import React from 'react'








export default function Orders({order}) {
  return (
    <div>
        <h1>{order.email} </h1>
        <h2>{order.orderAmount} </h2>
    </div>
  )
}
