import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/Header"
import Data from "./src/Data"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import About from "./src/About"
import Contact from "./src/Contact"
import Error from "./src/Error"
import Restaurant from "./src/Restarurant"


const NamasteApp=()=>{
    return(
        <div className="shiva">
            <Header/>
            <Outlet/>
        </div>
    )
}

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<NamasteApp/>,
        children:[
            {
                path:"/",
                element:<Data/>

            },
            {
        path:"/about",
        element:<About/>
    },{
        path:"/contact",
        element:<Contact/>
    },{
        path:"/restaurant/:id",
        element:<Restaurant/>
    }
            
        ],
        errorElement:<Error/>
    },
    
])


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(< RouterProvider router={approuter}/>)