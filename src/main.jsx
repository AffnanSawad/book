import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Root/Home/Home';
import ErroePage from './Components/Root/ErrorPage/ErroePage';
import Contact from './Components/Root/Contact/Contact';
import About from './Components/Root/About/About';
import ListedBooks from './Components/Root/ListedBooks/ListedBooks';
import Pages from './Components/Root/Pages/Pages';
import Bookdetails from './Components/Root/Bookdetails/Bookdetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    errorElement: <ErroePage></ErroePage> ,


  children: [

 {
path: '/',
element: <Home></Home>


 },

 {

path:'/contact',
element: <Contact> </Contact>

 },
 {

path:'/about',
element: <About></About>
,
 },
 {

path:'/listedbooks',
element: <ListedBooks></ListedBooks>

 },
 {

path:'/pagestoread',
element: <Pages> </Pages>

 },

 {

 path: '/book/:id',
 element: <Bookdetails> </Bookdetails>,
 loader: ()=> fetch('/Books.json')

 }






  ]




  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
