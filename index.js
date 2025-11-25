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


const Grocery = lazy(() => import("./src/Grocery"));

const NamasteApp=()=>{
    return(
        <div className="shiva">
            <Header/>
            <Outlet/>
        </div>
    )
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
        path: "/testing",
        element: <Testing />,
      },
      {
        path: "/about/:username",
        element: <About />,
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