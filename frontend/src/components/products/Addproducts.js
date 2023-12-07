import React, { useEffect, useState } from 'react';
import { Products } from './Products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Addproducts = () => {
  const [products, setProducts] = useState([]);
  const [toggle,settoggle]=useState(true);

  const [newProduct, setNewProduct] = useState({
    productname: '',
    price: 0,
    quantity: 0,
    description: '',
    catageory: '',
    productimages: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const images = [];
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      images.push(files[i]);
    }
    setNewProduct({
      ...newProduct,
      productimages: images,
    });
  };
  const formData = new FormData();

  // Append non-file fields
  formData.append('productname', newProduct.productname);
  formData.append('price', newProduct.price);
  formData.append('quantity', newProduct.quantity);
  formData.append('description', newProduct.description);
  formData.append('catageory', newProduct.catageory);

  // Append each file separately
  newProduct.productimages.forEach((image) => {
    formData.append('productimages', image);
  });

  const handleAddProduct = async() => {
    console.log({...newProduct});
    const response=await axios.post('/product/farm-product',formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if(response.status==201){
      toast.success("product added successfully!", {
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
    setNewProduct({
      productname: '',
      price: 0,
      quantity: 0,
      description: '',
      catageory: '',
      productimages: [],
    });
  };
  const getproductdata=()=>{
    axios.get('/product/farm-product')
    .then(res=>{
      setProducts([...res.data.products])
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
    <div>
    {toggle?
    (
    <>
    <div>{
      products?.map(product =>
       (
      <Products 
          key={product._id}
          id={product._id}
          images={product.productimages[0]}
          name={product.productname}
          price={product.price}
          catageory={product.catageory}
          quantity={product.quantity}
      />)
       ) }
       </div>
       <div>
       <button  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
         onClick={()=>settoggle(!toggle)}>
      add product
      </button>
      </div>
      </>
  )
  :
  (
    <>
    <div className="container mx-auto p-4">
     
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form className="mb-4">
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Product Name:</label>
          <input
            type="text"
            name="productname"
            value={newProduct.productname}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Description:</label>
          <textarea
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Category:</label>
          <input
            type="text"
            name="catageory"
            value={newProduct.catageory}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">Product Images:</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <button
          type="button"
          onClick={handleAddProduct}
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
   </>
    )}
     <ToastContainer />
  </div>
  )
};

export default Addproducts;
