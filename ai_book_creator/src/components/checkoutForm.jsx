import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CheckoutForm = ()=> {
    const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
      },
      redirect:'if_required'
    });

    if (error) {
        setMessage(error.message);
      } else {
        console.log('yeaaaah');
      }



      try {
        const user = await localStorage.getItem('user')
        const dataU = await JSON.parse(user)
        const pack = await localStorage.getItem('pack')
        const dataP = await JSON.parse(pack)
        const data = await axios.post('http://localhost:8080/api/updateUserCredits', {
            user_id: dataU._id,
            credits: dataP.credits
        })

        const userdata = await localStorage.getItem('user')
        const datauser = JSON.parse(userdata)
        
        navigate(`/book?email=${datauser.email}&fullname=${datauser.name}&secret=${datauser.secret}&id=${datauser._id}`)
      } catch (error) {
        setMessage(error.message)
      }

    setIsProcessing(false);
  };

  return (
    <form style={{width: 400, height: 500}} id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}