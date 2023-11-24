import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './components/home/Home'
import Products from './components/products/ProductsPage'
import Signup from './components/signup/Signup'
import Signin from './components/signup/Signin';
import Reset from './components/signup/Reset'
import Contact from './components/contact/Contact';


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
      path:"/contactus",
      element:<Contact />
    }
  ])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
