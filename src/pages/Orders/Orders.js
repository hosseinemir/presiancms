import React from 'react'
import './Orders.css'
import Error from '../../components/Error/Error'

export default function Orders() {
  return (
    <div className='orders-main'>
      <Error msg={"هیچ سفارشی یافت نشد"}/>
    </div>
  )
}
