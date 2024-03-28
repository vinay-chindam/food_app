import React from 'react'

const PlaceOrder = () => {
  return (
    <form className='place-order'>
<div className="place-order-left">
  <p className='title'>Delivery Information</p>
  <div className="multi-fields">
    <input type="text" placeholder='Frist name' />
    <input type="text" placeholder='Last name' />

  </div>
  <input type="email" placeholder='email address' />
  <input type="text" placeholder='street' />
  <div className="multi-fields">
    <input type="text" placeholder='State' />
    <input type="text" placeholder='City' />

  </div>
  <div className="multi-fields">
    <input type="text" placeholder='Zipcode' />
    <input type="text" placeholder='country' />

  </div>
  <input type="text" placeholder='phone' />

</div>
<div className="place-order-right">
<div className="cart-total">
    <h2>Cart Total</h2>
    <div className="cart-total-details">
      <p>Subtotal</p>
      <p>${getTotalCartAmount()}</p>
    </div>
    <hr />
    <div className="cart-total-details">
      <p>Delivery Fee</p>
      <p>${getTotalCartAmount()===0 ? 0 :2}</p>
      
    </div>
    <hr />
    <div className="cart-total-details">
      <b>Total</b>
      <b>${getTotalCartAmount()===0 ? 0 :getTotalCartAmount()+2}</b>
    </div>
    <button onClick={()=>navigate('/orders')}>Proceed to Payment</button>
  </div>

</div>
</form>

  )
}

export default PlaceOrder