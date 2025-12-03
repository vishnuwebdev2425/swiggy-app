
const { sum } = require("../sum");

test("Testing the Sum Function Which  Return Sum of Two Numbers",()=>{
    const result=sum(2,5)
    expect(result).toBe(7)
})