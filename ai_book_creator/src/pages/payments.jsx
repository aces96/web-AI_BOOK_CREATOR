import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { CheckoutForm } from "../components/checkoutForm";



export const Payment = ()=>{
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");


        useEffect(() => {
            fetch("http://153.92.214.13:8080/api/stripeConfig").then(async (r) => {
            const { publishableKey } = await r.json();
            setStripePromise(loadStripe(publishableKey));
            });
        }, []);


        useEffect(() => {

            axios.post("http://153.92.214.13:8080/api/create-payment-intent", {
                price: 100
            }).then(async (result) => {
                var { clientSecret } =  result.data;
                console.log('client secret', result);
                setClientSecret(clientSecret);
                });
        }, []);


        return (
            <>
            {clientSecret && stripePromise && (
                <Box sx={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <h1>React Stripe and the Payment Element</h1>
                    <Elements  stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm />
                    </Elements>
                </Box>
            )}
            </>
        );
}