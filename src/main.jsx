import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import AuthProvider from './Providers/AuthProvider.jsx';
import router from './Routes/Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <div className='mx-auto max-w-7xl'>
    <React.StrictMode>
    {/* <AuthProvider> */}
       <RouterProvider router={router} />
      {/* </AuthProvider> */}
  </React.StrictMode>,
  {/* </div>  */}
)
