import React, { useEffect, useState } from 'react'
import './Product.css'

import Addproduct from '../../components/Addproduct/Addproduct'
import Tableproduct from '../../components/Tableproduct/Tableproduct'

export default function Product() {
  const [allproducts, setallproducts] = useState([]);
  
  const fetchpro = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((data) => {
        data.reverse()
        setallproducts(data)});
  };
  useEffect(() => {
    fetchpro();
  }, []);
  return (
    <div className='product-main'>
      <Addproduct fetchpro={fetchpro}></Addproduct>
     
      <Tableproduct fetchpro={fetchpro} allproducts={allproducts}></Tableproduct>
      
      
    </div>
  )
}
