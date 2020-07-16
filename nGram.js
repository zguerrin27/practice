//NUMBER OF N-GRAMS IN A SENTENCE 

let sentence = "The other day we went to the store for milk."

function nGrams(string, n){
  let words = string.toLowerCase().split(' ');
  let lastGram = words.length - n;
  let grams = [];
  let i, j;
  
  for(i = 0; i < lastGram; i++){
    let seq = '';
    for(j = i; j < i + n; j++){
      seq += words[j] + ' ';
    }
    grams.push(seq);
  }
  return grams;
}

console.log(nGrams(sentence, 2))


let sentence = "The other day I went, to the mall, the other, day."

function mostCommonNGram(string, n){
  let strippedString = string.replace(/[,.]/g, '')
  let words = strippedString.toLowerCase().split(' ');
  let lastGram = words.length - n;
  let grams = [];
  
  for(let i = 0; i <= lastGram; i++){
    let seq = "";
    for(let j = i; j < i + n; j++){
      seq += words[j] + " ";
    }
    grams.push(seq)
  }
  
  let map = {}
  let mf = grams[0]
  
  for(let k = 0; k < grams.length; k++){
    if(!map[grams[k]]){
      map[grams[k]] = 1
    } else {
      ++map[grams[k]]
      if(mf < map[grams[k]]){
        mf = grams[k]
      }
    }
  }
  
  return map;
}

console.log(mostCommonNGram(sentence, 2))


let string = "The other day I went to the mall the other"

console.log(commonNGrams(string, 2))

// sentence length  10
// n grams 
// uni-grams        10   
// bi-grams         9
// tri-grams        8
// 4-gram           7
// 5-gram           6
// 6-gram           5 
// 7-gram           4 
// 8-gram           3 
// 9-gram           2 
// 10-gram          1
