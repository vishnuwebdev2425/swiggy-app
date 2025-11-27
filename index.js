import React,{lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Header"
import Data from "./src/Data"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import About from "./src/About"
import Contact from "./src/Contact"
import Error from "./src/Error"
import Restaurant from "./src/Restarurant"
import Testing from "./src/Testing"
import { Provider } from "react-redux"
import appstore from "./utils/appstore"
import Cart from "./src/Cart"


const Grocery = lazy(() => import("./src/Grocery"));

const NamasteApp=()=>{
    return (
      <Provider store={appstore}>
        <div className="shiva">
          <Header />
          <Outlet />
        </div>
      </Provider>
    );
}

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <NamasteApp />,
    children: [
      {
        path: "/",
        element: <Data />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "/about/:username",
        element: <About />,
      },
      {
        path:"/cart",
        element:<Cart/>

      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Something Went Wrong</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(< RouterProvider router={approuter}/>)