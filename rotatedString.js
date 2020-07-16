// is this second string a rotated version of the frist string?


function checkRotationStrings(string, rotated) {
  return string.length === rotated.length && rotated.repeat(2).includes(string) ? 1 : -1;
}

console.log(checkRotationStrings('abc', 'cab'))