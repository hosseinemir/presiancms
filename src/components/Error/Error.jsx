import React from 'react'
import './Error.css'

export default function Error({msg}) {
  return (
    <div className='error-main'>
        <p className='error-p'>{msg}</p>
    </div>
  )
}
