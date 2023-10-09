import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import '../styles/shop.css';

export const CheckoutForm = ({totalAmount, cartDescriptions}) => {
    const amountToSend = Math.round(totalAmount * 100);
    const desc = cartDescriptions
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const customerDetails = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
        };
    
        const billingDetails = {
            address: {
                line1: formData.get("address_line1"),
                line2: formData.get("address_line2"),
                city: formData.get("city"),
                state: formData.get("state"),
                postal_code: formData.get("postal_code"),
                country: formData.get("country"),
            }
        };
    
        if (!stripe || !elements) {
            console.error("Stripe has not loaded or elements not available.");
            return;
        }
    
        if (!cartDescriptions) {
            console.error("Description is missing.");
            return;
        }
    
        const cardNumberElement = elements.getElement(CardNumberElement);
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardNumberElement,
        });
    
        if (error) {
            console.error(error);
        } else {
            try {
            // In your CheckoutForm component
const response = await fetch('http://localhost:4000/charge', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        paymentMethodId: paymentMethod.id,
        amount: amountToSend,
        desc: desc, // Assuming `totalAmount` is in cents
        confirm: true,
        customer: customerDetails,  // <--- Change this line
        billing: billingDetails     // Also, adjust this to match the server if needed
    }),
});

    
                const responseData = await response.json();
    
                if (response.status !== 200 || responseData.error) {
                    throw new Error(responseData.error || 'Payment failed!');
                }
    
                console.log('Payment successful!', responseData);
                console.log('Received cartDescriptions:', cartDescriptions);

    
            } catch (err) {
                console.error("Error charging the card:", err.message);
            }
        }
    };
    
    return (
      <form onSubmit={handleSubmit} className="checkout-form">
      {/* Customer Details */}
      <div className="customer-details">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone" required />
      </div>

      {/* Billing Address */}
      <div className="billing-address">
          <input type="text" name="address_line1" placeholder="Address Line 1" required />
          <input type="text" name="address_line2" placeholder="Address Line 2 (Optional)" />
          <input type="text" name="city" placeholder="City" required />
          <input type="text" name="state" placeholder="State" required />
          <input type="text" name="postal_code" placeholder="Postal Code" required />
          <input type="text" name="country" placeholder="Country" required />
      </div>

      {/* Card Details */}
      <div className="card-details">
          <CardNumberElement className="card-number-input" />
          <CardExpiryElement className="card-expiry-input" />
          <CardCvcElement className="card-cvc-input" />
      </div>

      <button type="submit" disabled={!stripe} className="card-submit">
          Pay
          {/* SVG Code */}
      </button>
  </form>
    );
};
