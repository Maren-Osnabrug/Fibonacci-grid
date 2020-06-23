export const SEQUENCE_LENGTH = 5;

export const previousFibonacciNumber = (currentNumber: number) => {
    const a = currentNumber / ((1 + Math.sqrt(5)) / 2.0);
    return Math.round(a)
}

export const fibonacciNumberAtPosition = (position: number) => {
  let collection = [0, 1];
  for (let i = 2; i < position + 1; i++){
    collection.push(collection[i - 2] + collection[i -1])
  }
  return collection[position];
}

export const MINIMUM_FIBONACCI_VALUE = fibonacciNumberAtPosition(SEQUENCE_LENGTH);

export const getFibonacciSequence = (cell) => {
	let sequence = []
	let toPush = cell
	for (let iterator = 0; iterator < SEQUENCE_LENGTH; iterator++) {
		sequence.push(toPush)
		toPush = previousFibonacciNumber(toPush)
	}

	return sequence.reverse()
}

export const isPerfectSquare = (number: number) => {
		const square = Math.floor(Math.sqrt(number));
		return ((square * square) === number);
}

export const isFibonacci = (n) => {
	// n is Fibinacci if one of
  // 5*n*n + 4 or
  // 5*n*n - 4 or
  // both is a perfect square
	return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

export const sequencesAreEqual = (sequence: number[], subsetRow: number[]) => (
  sequence.every((currentValue: number, index: number) => currentValue === subsetRow[index])
)

export const isBetweenIndex = (index, lowerBound, upperbound) => {
  return index >= lowerBound && index <= upperbound
}

// check if cell is less than the value at SEQUENCE_LENGTH in the Fibinacci Sequence
// in a sequence of SEQUENCE_LENGTH Fibinacci numbers,
// if the number at that point has not been reached yet,
// the sequence is not long enough(yet) and we can stop these calculations early
// also check if the cell itself is a Fibonacci number,
// and if we have enough items left in the row
