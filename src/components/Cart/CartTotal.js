import React from 'react'
import { Link } from 'react-router-dom'
import PayPalButton from './PayPalButton'
export default function CartTotal({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end'>
            <Link to='/'>
              <button
                className='btn btn-outline-danger text-uppercase mb-3 px-5'
                type='button'
                onClick={() => {
                  clearCart()
                }}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className='text-title'>
                subtotal :<strong>$ {cartSubTotal}</strong>
              </span>
            </h5>
            <h5>
              <span className='text-title'>
                tax :<strong>$ {cartTax}</strong>
              </span>
            </h5>
            <h5>
              <span className='text-title'>
                total :<strong>$ {cartTotal}</strong>
              </span>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            ></PayPalButton>
          </div>
        </div>
      </div>
    </>
  )
}
