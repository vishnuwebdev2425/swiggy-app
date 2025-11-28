import React,{lazy,Suspense, use, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Header"
import Data from "./src/Data"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import About from "./src/About"
import Contact from "./src/Contact"
import Error from "./src/Error"
import Restaurant from "./src/Restarurant"

import { Provider } from "react-redux"
import appstore from "./utils/appstore"
import Cart from "./src/Cart"
import UserContext from "./utils/UserContext"


const Grocery = lazy(() => import("./src/Grocery"));

const NamasteApp=()=>{
  const [username,setusername]=useState()
  const finalcall = () => {
    const data ={
      name:"Vishnu"
    }
    setusername(data.name);
    console.log(username)
  };
   useEffect(()=>{
    finalcall()

   },[])
    return (
      <UserContext.Provider value={{loggedInuser:username}}>
        <Provider store={appstore}>
          <div className="shiva">
            <Header />
            <Outlet />
          </div>
        </Provider>
      </UserContext.Provider>
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