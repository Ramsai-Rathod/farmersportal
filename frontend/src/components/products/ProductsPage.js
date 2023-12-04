import { Products } from './Products';
import { useEffect, useState } from 'react';
import './Products.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStore } from '../store';

function ProductsPage() {
  const [products,setProducts]=useState([]);
  const setproduct=useStore((state)=>state.setProducts);
  const product=useStore((state)=>state.productsarray);
console.log("iam here"+ product);
 const getproductdata=()=>{
  axios.get('/product/user-products')
  .then(res=>{
    console.log(res.data.products);
    setProducts([...res.data.products])
    setproduct(products);
})
  .catch(err=>{
    toast.error(err.response, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
    }
  )

 }
  useEffect(()=>{
     getproductdata();
  },[])
  return (
    <div className='prodt'>
    {products?.map(product => (
        <Products 
            key={product._id}
            images={product.productimages[0]}
            name={product.productname}
            price={product.price}
            catageory={product.catageory}
            quantity={product.quantity}
        />
    ))}
    <ToastContainer/>
</div>

  )
}

export default ProductsPage
