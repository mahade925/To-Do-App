import React, { useEffect, useRef } from 'react';
import { actions } from 'react-table';

const PayPal = () => {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Subscription",
                            amount: {
                                currency_code: "USD",
                                value: 5
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await (actions.order.capture)
                console.log('Succefully Subscribed');
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <h1>Paypal</h1>
            <div ref={paypal}></div>
        </div>
    );
};

export default PayPal;