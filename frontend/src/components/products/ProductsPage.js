import { Products } from './Products';
import { useEffect, useState } from 'react';
 import contents from './Content';
 import './Products.css'
import axios from 'axios'

function ProductsPage() {
  
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
