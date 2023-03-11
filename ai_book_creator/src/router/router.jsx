import {
    createBrowserRouter,               
    createRoutesFromElements,
    Outlet                               
  } from "react-router-dom";
  import { Route, Routes } from "react-router-dom";
import App from "../App";
import { Pricing } from "../pages/pricing";
import { Login } from "../pages/login";
import { BookCreator } from "../pages/bookCreator";
import { BooksTables } from "../components/bookCreator.components";


export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route index element={<App />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="book" element={<BookCreator />}>
            <Route path="book_table" element={<BookCreator/>}/>
            <Route path="pages_table" element={<BookCreator/>}/>
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
    