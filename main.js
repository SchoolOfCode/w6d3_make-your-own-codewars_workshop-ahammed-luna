/* 
👉 Write your kata here!
Scenario: there is a dragon with its own castle waiting for a friend to join it in its
luxurious and adventurous life.
All you need to do to join the dragon is to organise a bunch of magical flowers:
 
Each flower is numbered, go through the bunch of flowers and separate them in 3 different bunches:

-  return together the even numbered 
flowers so you can find the key to the castle,
-  return together the negative numbered flowers to get a magical spell book so you can learn
magic and go for adventures
-  return together the leftovers flowers so you can 
find the map to the castle,

what we need to make this happen:
-an initial array where all the numbered flowers are inside
-a function to go through the array
    -in the function:
        -for loop to go through the array
            1. if statement for even numbers if( === some[i]) 
                return even numbers pushed into the array
                create variable with empty array

            2. if statement for odd numbers
                return even numbers pushed into the array
                create variable with empty array

            3. if statement for negative numbers
                return even numbers pushed into the array
                create variable with empty array


*/


//👉 Write the function your CodeWarriors will start with below here:


export default function arrayLoop(array){
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
       console.log(oddArray);
       console.log(evenArray);
       console.log(negetiveArray);

     return evenArray;
            //oddArray,
            //negetiveArray;
       
           
      
       
   }