//MOST COMMON IN ARRAY

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 2, 2, 2, 2, 3];


function findMostFrequent(arr){
  var map = {};
  var mostFrequentElement = arr[0];
  
    for(var i = 0; i < arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]]=1;
        }else{
            ++map[arr[i]];
            if(map[arr[i]] > map[mostFrequentElement]){
                mostFrequentElement = arr[i];
            }
        }
    }
    return mostFrequentElement;
}

console.log(findMostFrequent(arr1))


var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; //array
var mf = 1; //default maximum frequency
var m = 0;  //counter
var item;  //to store item with maximum frequency
for (var i=0; i<arr1.length; i++){    //select element (current element)

        for (var j=i; j<arr1.length; j++){   //loop through next elements in array to compare calculate frequency of current element
        
                if (arr1[i] == arr1[j])    //see if element occurs again in the array
                 m++;   //increment counter if it does

                if (mf<m){  //compare current items frequency with maximum frequency
                  mf=m;      //if m>mf store m in mf for upcoming elements
                  item = arr1[i];   // store the current element.
                }
        }
        m=0;   // make counter 0 for next element.
}






const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = data.reduce((total, amount) => {
  amount.c.forEach( color => {
      total.push(color);
  })
  return total;
}, [])

console.log(colors) 

//['blue','green','green','black','orange','blue','green','red']