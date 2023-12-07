import { FaShoppingCart, FaRegBookmark,  FaFireAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export function Products(props) {
  const path=`/productimages/${props.images}`;
  const addProductToCart=async()=>{
    console.log(props.id);
    const res=await axios.post(`/cart/cart-val/${props.id}`,{quantity:1})
    if(res.status===201)
    {toast.success("product added to cart!", {
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
    else{
        toast.error("error in adding to cart",{
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
  }
    return(

        <div className='productList'>
            <div key={props._id} className='productCard'>
                <img src={path} alt='product-img' className='productImage'></img>

                <FaShoppingCart className={"productCard__cart "} />
                <FaRegBookmark className={"productCard__wishlist"} />
                <FaFireAlt className={"productCard__fastSelling"} />

                <div className='productCard__content'>
                    <h3 className='productName'>{props.productname}ans {props.images}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice '>₹{props.price}</div>
                        <div className='productSales'>{props.quantity} kg available</div>
                    </div>
                    <div className='displayStack__2'>
                        
                        <div className='productTime'>catagory:{props.catageory}</div>
                    </div>
                    <Link to={`/products/${props.id}`}>view product</Link>
                    <button onClick={()=>addProductToCart()} className=" bg-slate-200 s">
                        add to cart
                        </button> 
                </div>

            </div>
            <ToastContainer />
        </div>
    
    )
}