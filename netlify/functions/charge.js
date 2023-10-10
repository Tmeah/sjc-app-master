// netlify/functions/charge.js

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);

  try {
    const { amount, paymentMethodId, desc, customer, billing, order } = data;

    // Create a new customer or retrieve from database (if exists)
    const stripeCustomer = await stripe.customers.create({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
    });

    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "gbp",
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
        allow_redirects: "never",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Payment successful!", payment }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Payment failed!" }),
    };
  }
};
