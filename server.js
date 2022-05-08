const express = require("express");

const Pizza = require("./models/pizzaModel");

const app = express();

const db = require("./db");

app.use(express.json());



const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')
app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/' , ordersRoute)

app.get("/", (req, res) => {
  res.send("server working " + port);
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server running at port 8000");
});
