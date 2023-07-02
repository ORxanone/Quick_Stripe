require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const router = express.Router();
router.use(express.json());


router.post('/payment', (req, res) => {
    stripe.customers.create({
        email: req.body.email,
        source: 'tok_visa',
    })
        .then((customer) => {
            return stripe.charges.create({
                customer: customer.id,
                amount: 4000,
                currency: "USD",
            })
        })
        .then((charge) => {
            console.log(charge);
            res.send("Sucsess")
        })
        .catch((err) => {
            res.send(err)
        })
})



module.exports = router;
