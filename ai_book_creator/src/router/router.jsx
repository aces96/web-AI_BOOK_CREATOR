import {
    createBrowserRouter,               
    createRoutesFromElements,
    Outlet                               
  } from "react-router-dom";
  import { Route, Routes, useParams } from "react-router-dom";
import App from "../App";
import { Pricing } from "../pages/pricing";
import { Login } from "../pages/login";
import { BookCreator } from "../pages/bookCreator";
import { BooksTables } from "../components/bookCreator.components";
import { Payment } from "../pages/payments";
import axios from "axios";




export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route >
        <Route index element={<App />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route id="book" path="book" loader={async ({ request })=>{
          const url = new URL(request.url);
          const id = url.searchParams.get("id");
            const books = await axios.post('http://localhost:8080/api/getAllBooks', {
              id: id
            })
            const user = await axios.post('http://localhost:8080/api/getUser', {
              id: id
            })
            if(books.data == null || user.data == null){
                return null
            }else {
              console.log('heeeeeeeeeeeeeeeeeey', books.data.data);
              return {
                books:books.data.data,
                user: user.data.user
              }
            }
         
        }} element={<BookCreator />}>
            <Route path="book_table" element={<BookCreator/>}/>
            <Route id="pages" path="pages_table" loader={async ({request})=>{
              const url = new URL(request.url);
              const bookId = url.searchParams.get('bookId');
              const data = await  localStorage.getItem('user');
              const user = JSON.parse(data)
              const req = await axios.post('http://localhost:8080/api/getPageById', {
                userId: user._id,
                bookId: bookId
              })
              console.log('reeeeeeeeeeq yoooooooo',req)


              return req

            }} element={<BookCreator/>}/>
            <Route path="create_page" element={<BookCreator/>}/>
        </Route>
        <Route path="payment" element={<Payment/>}/>
      </Route>
    )
  );


// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//     },
//     {
//         path: "/pricing",
//         element: <Pricing/>,
//     },
//     {
//         path: "/login",
//         element: <Login/>,
//     },
//     {
//         path: "/book",
//         element: <BookCreator/>,
//     },
//     ]);
    