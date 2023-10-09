const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51Nn1A4LGVdJ9rR4aRGF9uIpftOUcJi4cv8njGetHFDnWxYcaETsnmx6tlnZ6AmDVdzz8j8NsS7EfjjEzlC5EpGbJ00WWJcLppT');
const cors = require('cors');




const app = express();
const PORT = 4000;

// 1. Use CORS middleware
app.use(cors());

// 2. Use Body Parser middleware
app.use(bodyParser.json());

app.post('/charge', async (req, res) => {
    console.log('req.body:', JSON.stringify(req.body, null, 2));

    try {
        const { 
            amount, 
            paymentMethodId, 
            desc,
            customer, 
            billing,
            order 
        } = req.body;

        // Create a new customer or retrieve from database (if exists)
        const stripeCustomer = await stripe.customers.create({
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
        });

        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'gbp',
            payment_method: paymentMethodId,
            description: desc, // This is more like a general order description
            confirm: true,
            customer: stripeCustomer.id, // Associate the payment with the customer
            shipping: {
                name: customer.name,
                address: {
                    line1: billing.address.line1,
                    line2: billing.address.line2 || null,
                    city: billing.address.city,
                    state: billing.address.state,
                    postal_code: billing.address.postal_code,
                    country: billing.address.country,
                },
            },
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: "never"
            },
        });

        console.log(payment);
        res.send({ message: 'Payment successful!', payment });
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: 'Payment failed!' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
