//👉 Write your tests below here:

describe("Array functionality testing.", () =>{
    it("will oragnise all the flowers in the different vases they belong to", function(){
        const inputArray = [1, 2, 3, -1];
        const actual = arrayLoop(inputArray);
        let expected = {
            unlockKeyVase : [1, 3],
            unlockMapVase  : [2],
            unlockMagicBookVase : [-1],
          };
          expect(actual).toStrictEqual(expected);
})

})
