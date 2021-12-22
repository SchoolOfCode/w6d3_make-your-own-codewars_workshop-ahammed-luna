import arrayLoop from "./main.js";

//👉 Write your tests below here:
describe("Test Array functionality", () => {
it("should have even number array", function(){
    const newArray = [1, 2, 3, -1];
    const actual = arrayLoop(newArray);
   
    const expected = [2];
    expect(actual).toStrictEqual(expected);
})
/*
it("should have odd number array", function(){
    const newArray = [1, 2, 3, -1];
    const actual = arrayLoop(newArray);
   
    const expected = [1, 3];
    expect(actual).toStrictEqual(expected);
})

it("should have negetive number array", function(){
    const newArray = [1, 2, 3, -1];
    const actual = arrayLoop(newArray);
   
    const expected = [-1];
    expect(actual).toStrictEqual(expected);
})*/

})
