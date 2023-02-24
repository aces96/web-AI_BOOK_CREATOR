import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/router';
import WebFont from 'webfontloader';

  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
  },[])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
