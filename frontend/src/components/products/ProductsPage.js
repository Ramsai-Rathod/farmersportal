import { Products } from './Products';
import { useEffect, useState,useContext } from 'react';
import './Products.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Datacontext from '../../context/Datacontext';
function ProductsPage() {
  var res;
  const cont=useContext(Datacontext);
  const [products,setProducts]=useState([]);
  const getUserdata=async()=>{
   res=await axios.get('/user/loggedin')
      cont.setlog(res.data.data)
  }
 const getproductdata=()=>{
  axios.get('/product/user-products')
  .then(res=>{
    setProducts([...res.data.products])
    cont.productsset([...res.data.products]);
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
     getUserdata();
  },[])
  return (
    <div className='prodt'>
    {products?.map(product => (
        <Products 
            key={product._id}
            id={product._id}
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
