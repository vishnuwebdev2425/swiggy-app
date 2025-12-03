import { render ,screen} from "@testing-library/react"
import ProductItem from "../../src/ProductItem"
import data from "../Data/initia"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"

it("Should Cheeck the Component Is Rendered Or Not",()=>{
    render(
      <BrowserRouter>
        <ProductItem item={data} />
      </BrowserRouter>
    );

    const result = screen.getByText("Get Info");
    expect(result).toBeInTheDocument()
})