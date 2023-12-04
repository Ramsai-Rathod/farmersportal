import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "../store";

const Productdetails = () => {
  const { id } = useParams();
  const product={};
  const [relatedProducts, setRelatedProducts] = useState([]);
  const products=useStore((state)=>state.productsarray);
  const todo=()=>{
    console.log(products);
    const filterProduct = products.filter((product) => product._id === id);
    const relatedProducts = items.filter(
      (suman) => suman.category === product.category
    );

    // console.log("RelatedProduct = ",relatedProducts)
    setRelatedProducts(relatedProducts);
  }
  useEffect(() => {
    todo();
  }, [id, product.category]);
  return (
    <>
    <div>
    </div>
      <div className="container con">
        <div className="img">
          <img src={`/productimages/${product.imgSrc}`}alt="" />
        </div>
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
};

export default Productdetails;