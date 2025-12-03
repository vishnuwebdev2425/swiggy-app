import Contact from "../../src/Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { describe } from "node:test";

test("Should Contain the Linkdln text",()=>{
    render(<Contact/>)
    const result=screen.getByText("Linkdln")
    expect(result).toBeInTheDocument()
})

it("Shuold Contain to Labels",()=>{
    render(<Contact/>)
    const result=screen.getByPlaceholderText("Enter the name")
    expect(result).toBeInTheDocument()
})
it("Verifying the Labels Count",()=>{
    render(<Contact/>)
    const result=screen.getAllByRole("textbox")
    expect(result.length).toBe(2)
})

describe("Related to the Contact Component",()=>{
    it("Should Be Satisfying Every Component",()=>{
        render(<Contact/>)
        const result=screen.getByText("Whatsapp")
        expect(result).toBeInTheDocument()
    })

    it("Should Be Satisfying Every Component",()=>{
        render(<Contact/>)
        const finalresult = screen.queryByText("Vishnu Teja");
        expect(finalresult).not.toBeInTheDocument();
    });
})