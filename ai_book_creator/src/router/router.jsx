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
          if(books.data == null){
              return null
          }else {
            console.log('heeeeeeeeeeeeeeeeeey', books.data);
            return books.data.data
          }
        }} element={<BookCreator />}>
            <Route path="book_table" element={<BookCreator/>}/>
            <Route id="pages" path="pages_table/:bookId" loader={async ({request})=>{
              const url = new URL(request.url);
              const bookId = url.pathname.split('/').pop();
              const data = await  localStorage.getItem('user');
              const user = JSON.parse(data)
              const req = await axios.post('http://localhost:8080/api/getPageById', {
                userId: user.id,
                bookId: bookId
              })
              console.log('reeeeeeeeeeq',req.data)


              return req

            }} element={<BookCreator/>}/>
            <Route path="create_page" element={<BookCreator/>}/>
        </Route>
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
    