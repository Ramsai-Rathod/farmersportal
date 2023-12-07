import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Orderpage = () => {
  const[orders,setOrders]=useState([]);
  const getorders= async() => {
    const response=await axios.get("/order/get-orders");
    setOrders(response.data);
   }
  useEffect(()=>{
    getorders();
}, [orders])
  
  return (
    <div>
    {
        orders.products===0 ?(
  <div className='text-center'>
    <h1>You Haven't ordered anything!</h1>
  </div>
        ):

      (orders?.map((product)=>{        
        
                  <div className="card mb-3 my-5" style={{width:'700px'}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`/productimages/${product.imgSrc}`} className="img-fluid rounded-start" alt="product img" />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h3 className="btn btn-primary mx-3">
                                {product.price} ₹
                      </h3>
                      
      </div>
    </div>
  </div>
</div>
      }))
    }
      </div>
  )
      };
export default Orderpage