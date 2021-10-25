import React, { Component } from 'react'
import Product from './Product'
import { ProductConsumer } from '../context'
import Title from './Title'

export default class ProductList extends Component {
  render() {
    return (
      <>
        <div className='py-5'>
          <div className='container'>
            {/* PRODUCTS ROW */}
            <Title name='our' title='products' />
            <div className='row'>
              {/* ↓ CONTEXT API */}
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    )
  }
}
