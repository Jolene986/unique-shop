import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import image from '../../assets/diamond.svg'

const StripeButton =({price})=> {
  const stripePrice = price * 100 // they need it in cents
  const publishableKey = 'pk_test_51HZBk6IPhEd0eHQbbr9cj5AvvQaDxTlv9WNH3mMSDuKbvl06M82qK1xtEyHRVRq1vRVqJglkd7DMM0EiBRsSOias00Lbr42tBZ'
  const onToken = token=>{ 
    console.log(token)
    alert('Payment Successful')
  } 

  return (
    <StripeCheckout
    label='Pay Now'
    name = 'Unique shop'
    billingAddress
    shippingAddress
    image={image}
    description={`Your total is ${price} EUR`}
    amount={stripePrice}
    panelLabel='Pay Now'
    token = {onToken}
    stripeKey={publishableKey}
    />
  )
}
export default StripeButton