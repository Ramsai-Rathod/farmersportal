import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios';
 const Cart=()=>{
  useEffect(() => {
    const loadRazorpayScript = async () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        console.log('Razorpay script loaded');
      };
    };

    loadRazorpayScript();
  }, []);
  const checkouthandler =async(amount)=>{
    const {data:{key}}=await axios.get("/api/getkey")
    const {data:{order}}=await axios.post("/checkout",{amount})
    console.log(window);
    const options ={
      key,
      amount:order.amount,
      currency:"INR",
      name:"Sinmplyjs",
      description:"Razorpay tutorial",
      image:"https://avatars.githubusercontent.com/u/96648429?s=96&v=4",
      order_id:order.id,
      callback_url:"/paymentverification",
      prefill:{
        name:"Sagar gupta",
        email:"anandguptasir@gmail.com",
        contact:"1234567890"
      },
      notes:{
        "address":"razorapy official"
      },
      theme:{
        "color":"#3399cc"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();

  }
  const[cartproducts,setCartproducts]=useState([]);
  const clearCart=async()=>{
    await axios.delete()
  }
const getproducts=async()=>{
  try {
    const response=await axios.get('/cart/cart-val')
    console.log(response.data);
    setCartproducts(response.data);
  } catch (err) {
    console.log(err.message);
  
}
}
useEffect(() => {
  getproducts();
}, []);
  return (
    <>
    <div className="container my-5" style={{width:"54%"}}>
      {
        cartproducts.length===0 ?(
<>
<div className='text-center'>
  <h1>Your Cart is Empty</h1>
  <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
</div>
      
</>
        )
        :

      cartproducts?.map((product)=>{
        return(
          <>
          <div className="card mb-3 my-5" style={{width:'700px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`/productimages/${product.productId.productimages[0]}`} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title">{product.productId.productname}</h5>
        <p className="card-text">{product.productId.description}</p>
        <button className="btn btn-primary mx-3">
                        {product.productId.price} ₹
                      </button>
                      <button
                        onClick={()=>checkouthandler(1000)}
                       className="btn btn-warning"
                       >Buy Now</button>
      </div>
    </div>
  </div>
</div>
          </>
        )
      })}

      
    </div>

    {
        cartproducts.length!== 0 && (
          <div className="container text-center my-5" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
  
          }}>
            <button className='btn btn-warning mx-5 '>CheckOut</button>
            <button onClick={()=>clearCart()} className='btn btn-danger'>Clear Cart</button>
          </div>
        )
      }
    
       
    </>
  )
}
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

export default Cart;