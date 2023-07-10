import React from 'react'
import './Discount.css'
import Error from '../../components/Error/Error'

export default function Discounts() {
  return (
    <div className='discount-main'>
      <Error msg={"هیچ تخفیفی یافت نشد"}/>
    </div>
  )
}
