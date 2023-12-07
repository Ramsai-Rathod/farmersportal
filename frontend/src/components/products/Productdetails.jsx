import React, { useContext} from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Datacontext from "../../context/Datacontext";
const Productdetails = () => {
  const cont=useContext(Datacontext);
  const products=cont.products;
  const {id}  = useParams();
  const product=products.find((product)=>(
    product._id.toString()===id.toString())
    );
  console.log(product);
  const path=`/productimages/${product.productimages}`;
  //const path=`/productimages/${product.productimages[0]}`;
  return (
    <>
    <div>
    </div>
      <div className="container con">
      <img src={path} alt='product-img' className='productImage'></img>

        {/* <div className="img">
          <img src={path}alt="product image" />
        </div> */}
        <div className="text-center">
          <h1 className="card-title">{product.productname}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  
  );
}

export default Productdetails;