import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './page/ForYou.jsx'
import Like from './page/Like.jsx'
import Cart from './page/Cart.jsx'
import Home1 from './page/ForBussiness.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home1/>,
        },
        {
            path: "/login",
            element: (
                <Like/>
            ),
        },
        {
            path: "/cart",
            element: (
                <Cart/>
            ),
        },
        {
            path: "/for-you",
            element: (
                <Home/>
            ),
        },
    ],
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
