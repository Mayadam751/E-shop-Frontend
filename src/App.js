import './App.css';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Signin from './components/login/login';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  let routers = createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {path:"*",element:<NotFound/>},
    {path:"home",element:<Home/>},
    {path:"register",element:<Register/>},
    {path:"login",element:<Signin/>},
    {index:true,element:<Home/>},
    {path:"products",element:<Products/>},
   {path:"Brands",element:<Brands/>},
   {path:"Cart",element:<Cart/>},
  ]}
])

return (
  <>
<Provider store={store}>
<RouterProvider router={routers}>
</RouterProvider>
</Provider>
</>
  );
}
export default App;
