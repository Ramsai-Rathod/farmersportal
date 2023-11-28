import { FaShoppingCart, FaRegBookmark,  FaFireAlt } from 'react-icons/fa';
export function Products(props) {
  const path=`/productimages/${props.images}`;
    return(
        <div className='productList'>
            <div key={props._id} className='productCard'>
                <img src={path} alt='product-img' className='productImage'></img>

                <FaShoppingCart className={"productCard__cart"} />
                <FaRegBookmark className={"productCard__wishlist"} />
                <FaFireAlt className={"productCard__fastSelling"} />

                <div className='productCard__content'>
                    <h3 className='productName'>{props.productname}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        <div className='productSales'>{props.quantity} units available</div>
                    </div>
                    <div className='displayStack__2'>
                        
                        <div className='productTime'>catagory:{props.catageory}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}