import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home'
import Products from './components/products/ProductsPage'
import Signup from './components/signup/Signup'
import Signin from './components/signup/Signin';
import Reset from './components/signup/Reset'
import Contact from './components/contact/Contact';
import Sendotp from './components/signup/Sendotp';
import Profilepage from './components/Profilepage';
import Orderpage from './components/Oders/Orderpage';
import Cart from './components/cart/Cart';
import Productdetails from './components/products/Productdetails';
import Datastate from './context/Datastate';
import Addproducts from './components/products/Addproducts';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/products',
          element:<Products />
        }
      ]
    },
    {
      path:'/signup',
      element:<Signup />
    },
    {
      path:'/signin',
      element:<Signin />
    },
    {
      path:"/resetpassword",
      element:<Reset />
    },
    {
      path:"/reset-otp",
      element:<Sendotp />
    },
    {
      path:"/addproducts",
      element:<Addproducts/>
    },
    {
      path:"/profile",
      element:<Profilepage />
    },
    {
      path:"/orderpage",
      element:< Orderpage/>
    },
    {
      path:"/cart",
      element:<Cart />
    },
    {
      path:"/products/:id",
      element:<Productdetails />
    },
    {
      path:"/contactus",
      element:<Contact />
    }
  ])

  return (
    <div >
      <Datastate>
      <RouterProvider router={router} />
      </Datastate>
    </div>
  );
}

export default App;
