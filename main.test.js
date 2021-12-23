//👉 Write your tests below here:
/*function sum(a, b){

    return a+b
}

it("should add the number", function(){

    const actual = sum(2,3)
   
    const expected = 5
    expect(actual).toBe(expected);
})*/
 
function arrayLoop(array){
 const evenArray = [];
 const oddArray  = [];
const negetiveArray = [];
 
    for(let i= 0; i < array.length; i++){
       
        if(array[i] < 0){
            negetiveArray.push(array[i]);

        }
        if(array[i]%2 === 1){
            oddArray.push(array[i]);

        }
        if(array[i]%2 === 0){
            evenArray.push(array[i]);

        }

    }

    return oddArray,
    evenArray,
    negetiveArray;
    
}
describe("Array functionality testing.", () =>{
it("should have even number array", function(){
    const newArray = [1, 2, 3, -1];
    const actual = arrayLoop(newArray);
   
    const expected = [2];
    expect(actual).toStrictEqual(expected);
})

it("should have odd number array", function(){
    const newArray = [1, 2, 3, -1];
    const actual = arrayLoop(newArray);
   
    const expected = [2];
    expect(actual).toStrictEqual(expected);
})

it("should have negetive number array", function(){
    const newArray = [1, 2, 3, -1];
    const actual = arrayLoop(newArray);
   
    const expected = [-1];
    expect(actual).toStrictEqual(expected);
})

});