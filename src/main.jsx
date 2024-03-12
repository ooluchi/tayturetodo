import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import TodoApp from "./components/TodoAppComponents/TodoApp";

const router = createBrowserRouter([
  { 
    path: '/tayturetodo',
    element: <App />,
    children: [
      {index:true, element: <Home /> },
      {path:'taytureTodoApp', element: <TodoApp /> },

    ]
  }
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
