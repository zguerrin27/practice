let set = [-1, -5, 2, 22, 11, 5]

// this answer is O(n) time complexity because it loops through the array once.
// O(n) space complexity as well as it is only the size of the array. 

function twoNumSum(array, targetSum){
  const nums = {};
  
  for(const num of array){
    const potentialMatch = targetSum - num;
    if(potentialMatch in nums){
      return [potentialMatch, num];
    } else {
      nums[num] = true
    }
  }
  return []
}

console.log(twoNumSum(set, 10))


function twoNumSum(array, targetSum){
  for(let i = 0; i < array.length - 1; i++){
    let firstNum = array[i]
    for(let j = i + 1; j < array.length; j++){
      let secondNum = array[j]
      if(firstNum + secondNum === targetSum){
        return [firstNum, secondNum]
      }
    }
  }
  return []
}

console.log(twoNumSum(set, 10))