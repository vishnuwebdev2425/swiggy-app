import { useRouteError } from "react-router-dom"

const Error=()=>{
    const errormsg=useRouteError()
    console.log(errormsg)
    return (
      <div>
        <h1>The Main Error is {errormsg.statusText}</h1>
        <h5>Status Code:{errormsg.status}</h5>
        <h1>The data:{errormsg.data}</h1>
      </div>
    );
}

export default Error