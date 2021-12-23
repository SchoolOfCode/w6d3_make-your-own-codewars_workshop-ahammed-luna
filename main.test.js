import arrayLoop from "./main.js";

//👉 Write your tests below here:

describe("Array functionality testing.", () =>{
    it("will oragnise all the flowers in the different vases they belong to", function(){
        const inputArray = [1, 2, 3, -1];
        const actual = arrayLoop(inputArray);
        let expected = {
            evenArray : [2],
            oddArray  : [1, 3],
            negetiveArray : [-1],
          };
          expect(actual).toStrictEqual(expected);
})

})
