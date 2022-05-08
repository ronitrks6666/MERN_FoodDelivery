const experss = require('express')
const router = experss.Router()
const pizza = require('../models/pizzaModel')







router.get("/getallpizzas",async (req,res)=>{
    try {
      const pizzas = await pizza.find({})
      res.send(pizzas)  
    } catch (error) {
        return res.status(400).json({message:error});
    }
})

module.exports = router







