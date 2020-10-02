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


const sentence = "The other day, I went to the mall, the other.. mall the mall, thes day .I. day I. day. i";

function mostCommonNGram(string, n){
  let strippedString = string.replace(/[,.]/g, '')
  let words = strippedString.toLowerCase().split(' ');
  // let words = string.toLowerCase().split(' ');
  let grams = [];
  let lastGram = words.length - n;
  
  for(let i = 0; i <= lastGram; i++){
    let seq = "";
    for(let j = i; j < i + n; j++){
      seq += words[j] + " "
    }
    grams.push(seq)
  }
  
  let mf = grams[0];
  let map = {};
  
  for(let m = 0; m < grams.length; m++){
    if(!map[grams[m]]){
      map[grams[m]] = 1;
    } else {
      ++map[grams[m]];
      if(map[mf] < map[grams[m]]){
        mf = grams[m];
      }
    }
  }
  
  console.log(map)
  return mf;
  
}

console.log(mostCommonNGram(sentence, 2));

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
