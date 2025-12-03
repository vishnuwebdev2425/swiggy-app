import Header from "../../src/Header";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appstore from "../appstore";
import { BrowserRouter } from "react-router-dom"; 
import test from "node:test";

it("Should Be Header Component Contain Button Element", ()=>{
    render(
      <BrowserRouter>
        <Provider store={appstore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const result= screen.getByText("Login")
    expect(result).toBeInTheDocument()
})

it("Should Be Contain Button Element with the test of Login",()=>{
    render(
        <BrowserRouter>
        <Provider store={appstore}>
            <Header/>

        </Provider>
        </BrowserRouter>
    )

    const finalresult=screen.getByRole('button',{name:"Login"})
    expect(finalresult).toBeInTheDocument()
})


  it("Should be Contain Grocery Text", () => {
    render(
      <BrowserRouter>
        <Provider store={appstore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const allresult = screen.getByText('Cart - 0')
    expect(allresult).toBeInTheDocument();
  });


test("Should Be Button Click It Will Point to Logout",()=>{
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const IntialResult=screen.getByRole('button',{name:"Login"})
    fireEvent.click(IntialResult)
    const finalresult=screen.getByRole('button',{name:"Logout"})
    expect(finalresult).toBeInTheDocument()
})