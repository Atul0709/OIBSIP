import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { razorpay} from "../actions/orderAction"; 

import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";


const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();

  // State to manage the Razorpay payment
  const [rzp, setRzp] = useState(null);

  useEffect(() => {
    // Load the Razorpay script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      // Create a new Razorpay instance after the script is loaded
      const rzpInstance = new window.Razorpay({
        key: "rzp_test_yozCiljaX8FROW", // Replace with your Razorpay API key
        amount: subTotal * 100, // Amount in paise
        name: "SliceWift",
        description: "Payment for your order",
        image: "/images/logo.png", // Replace with your store's logo URL
        handler: function (response) {
          // This function will be called when the payment is successful
          dispatch(razorpay(response.razorpay_payment_id, subTotal));
        },
        prefill: {
          name: "",
          email: "customer@example.com",
        },
        notes: {
          address: "Customer Address",
        },
        theme: {
          color: "#1890ff", // Customize the color
        },
      });

      rzpInstance.on("payment.failed", function (response) {
        // Handle payment failure
        console.error(response.error.description);
      });

      // Set the Razorpay instance in the state
      setRzp(rzpInstance);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, [subTotal, dispatch]);

  const openRazorpay = () => {
    // Check if the Razorpay instance exists
    if (rzp) {
      rzp.open();
    }
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Order placed successfully" />}

      <div className="mt-4">
        <button onClick={openRazorpay}>Pay Now</button>
      </div>
    </>
  );
};

export default Checkout;
