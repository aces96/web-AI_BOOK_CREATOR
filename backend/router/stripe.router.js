const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();

stripe = require("stripe")(process.env.STRIPE_SEC_KEY, {
    apiVersion: '2022-11-15',
  });



router.route('/stripeConfig')
        .get((req,res)=>{
            res.send({
                publishableKey: process.env.STRIPE_PUB_KEY
            })
        })

router.route("/create-payment-intent")
        .post( async (req, res) => {

            console.log(req.body);
            try {
              const paymentIntent = await stripe.paymentIntents.create({
                currency: "USD",
                amount: req.body.price,
                automatic_payment_methods: { enabled: true },
              });
          
              // Send publishable key and PaymentIntent details to client
              res.send({
                clientSecret: paymentIntent.client_secret,
              });
            } catch (e) {
              return res.status(400).send({
                error: {
                  message: e.message,
                },
              });
            }
          })

module.exports = router