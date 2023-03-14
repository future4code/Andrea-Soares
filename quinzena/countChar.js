//'aaabbb' => a3b3
//'escola' => e1s1c1o1l1a1 => 'escola'

const stringCompression = (input) => {
    const substrings = [];
    let lastChar = input[0];
    let charCounter = 0;
  
    for (const char of input) {
      if (char !== lastChar) {
        substrings.push(lastChar + charCounter);
        lastChar = char;
        charCounter = 0;
      }
      charCounter++;
    }
  
    substrings.push(lastChar + charCounter);
    let result = "";
    for (const key of substrings) {
      result += key;
    }
  
    return result.length > input.length ? input : result;
  };
  console.log(stringCompression('escola'));