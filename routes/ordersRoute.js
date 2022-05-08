const experss = require('express')
const router = experss.Router()
const stripe = require("stripe")('sk_test_51KwgQQSJ7OchCxeRivL9t1PoB7zXs3VQ9Let8TYdfQyyIKNuM8ls31DF1vjB8ExXfVtlfRIWZMoWou0mgPQhpKSx00tX2VUuVf')
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/orderModel');







router.post('/placeorder',async(req,res)=>{
    const {token,subtotal,currentUser,cartItems} = req.body
    try {
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const payment  =await stripe.paymentIntents.create({
            amount:subtotal*100,
            currency:'inr',
            customer:customer.id,
            receipt_email:token.email
        } , {
            idempotencyKey:uuidv4()
        })
       

        
        if(payment){
            const newOrder = new Order({
                name:currentUser.name,
                email:currentUser.email,
                userid:currentUser.userid,
                orderItems:cartItems,
                orderAmount:subtotal,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    pincode:token.card.address_zip
                },
                transactionId:payment.id
            })
            newOrder.save()
            
            res.send('Payment Done')
        }
        else{
            res.send('Payment failed')
        }
    } catch (error) {
        res.status(400).json({message:error})
    }
})

router.get('/myorders/:email',async(req,res)=>{
    const paramemail = req.params
    const email = paramemail.email
    const orders = await Order.find({email})
    console.log(orders)
    res.send({orders})
})



module.exports = router