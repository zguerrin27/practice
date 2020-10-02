//NUMBER OF N-GRAMS IN A SENTENCE 

const sentence = "The other day I, went to the, mall the, other mall the, mall the, day I day I day i";

function buildGrams(string, n){
  let strippedString = string.replace(/[,.]/g, "")
  let words = strippedString.toLowerCase().split(' ');
  let lastGram = words.length - n;
  let grams = [];
  
  for(let i = 0; i <= lastGram; i++){
    let sequence = '';
    for(let j = i; j < i + n; j++){
      sequence += words[j] + " ";
    }
    grams.push(sequence)
  }
  return grams;
}

function mostCommonNGram(string, n){
  let grams = buildGrams(string, n)
  let mf = grams[0];
  let map = {};
  
  for(let m = 0; m < grams.length; m++){
    if(!map[grams[m]]){
      map[grams[m]] = 1;
    } else {
      map[grams[m]]++;
      if(map[mf] < map[grams[m]]){
        mf = grams[m];
      }
    }
  }
  console.log(map)
  return mf;
}

console.log(mostCommonNGram(sentence, 2))

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
