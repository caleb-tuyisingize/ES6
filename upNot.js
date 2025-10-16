function solve(arr) {
  // Try each number as a potential start
  for (let start of arr) {
    let seq = [start];
    
    // Build the sequence by repeatedly finding the next number
    while (seq.length < arr.length) {
      let last = seq[seq.length - 1];
      let next = arr.find(n => n === last * 2 || (last % 3 === 0 && n === last / 3));
      if (!next) break;
      seq.push(next);
    }

    // If full sequence found, return it
    if (seq.length === arr.length) return seq;
  }
}

console.log(solve([12,22,3,1]));