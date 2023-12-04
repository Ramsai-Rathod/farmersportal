import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Orderpage = () => {
  const orders={};
  useEffect(async() => {
   orders=await axios.get("/order/get-orders");
  }, [orders])
  
  return (
    <>
    {
        orders.products.length==0 ?(
  <div className='text-center'>
    <h1>You Haven't ordered anything!</h1>
  </div>
        ):

      (orders.products.map((product)=>{        
        
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
      </>
  )
      };
export default Orderpage