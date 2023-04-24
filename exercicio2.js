function fibonacci_sequence(n) {
  let sequence = [0, 1];

  
  for (let i = 2; i <= n; i++) {
    let next_number = sequence[i-1] + sequence[i-2];
    sequence.push(next_number);
  }

  return sequence;
}

function check_fibonacci(n) {
  let sequence = fibonacci_sequence(n)

  
  if (sequence.includes(n)) {
    console.log(n + " pertence à sequência de Fibonacci.");
  } else {
    console.log(n + " não pertence à sequência de Fibonacci.");
  }
}

check_fibonacci(34);