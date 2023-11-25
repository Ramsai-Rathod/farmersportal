import { Products } from './Products';
import { useEffect, useState } from 'react';
 import contents from './Content';
 import './Products.css'
import axios from 'axios'

function ProductsPage() {
  const[products,setProducts]=useState([]);
  const getproducts=async()=>{
    try {
      const product=await axios.get('/product/user-products');
      setProducts({...products})
      console.log()
    } catch (error) {
      
    }
    
  }
  useEffect(getproducts(),[]);

  return (
    <div className='prodt'>
    {contents.map(contents => (
        <Products 
            key={contents.id}
            image={contents.image}
            name={contents.name}
            price={contents.price}
            totalSales={contents.totalSales}
            timeLeft={contents.timeLeft}
            rating={contents.rating}
        />
    ))}
</div>
  )
}

export default ProductsPage
