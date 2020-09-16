import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "../custom-button/custom-button.comp";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey =
    "pk_test_51HRhX7JOAW3QLseBBE1yIdNacTPNniQFhAzf1JGB6QoPt243N2LwT98yCtISNpIVo2yjQE0Hi0ysiSBHLCoNuR1i00OoWYj3b2";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      name="test v"
      billingAddress
      shippingAddress
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publicKey}
    >
      <CustomButton className="btn checkout-btn">checkout</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
