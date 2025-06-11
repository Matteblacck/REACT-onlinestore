import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../02-pages/Home.tsx';
import ShopPage from '../02-pages/ShopPage.tsx';
import ItemPage from '../02-pages/ItemPage.tsx';
import CartPage from '../02-pages/CartPage.tsx';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

//pages----
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Родительский компонент (App)
    children: [
      { path: '', element: <Home /> },
      { path: "/cart", element: <CartPage /> },
      { path: ":section/:category/:subcategory", element: <ShopPage /> },
      { path: ":section/:category/:subcategory/:name", element: <ItemPage /> },
 
   
    ],
  },
], {basename: import.meta.env.BASE_URL }
);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider> 
  </StrictMode>,
)
