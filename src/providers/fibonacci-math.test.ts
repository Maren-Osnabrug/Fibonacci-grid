import * as Fibonacci from './fibonacci-math';

describe('previousFibonacciNumber', () => {
	it('given a number, calculates the previous number in the fibonacci sequence', () => {
		expect(Fibonacci.previousFibonacciNumber(2)).toEqual(1);
		expect(Fibonacci.previousFibonacciNumber(3)).toEqual(2);
		expect(Fibonacci.previousFibonacciNumber(5)).toEqual(3);
		expect(Fibonacci.previousFibonacciNumber(8)).toEqual(5);
		expect(Fibonacci.previousFibonacciNumber(13)).toEqual(8);
	});
});

describe('fibonacciNumberAtPosition', () => {
	it('given a position in the sequence, will return the value at that index in the sequence', () => {
		expect(Fibonacci.fibonacciNumberAtPosition(2)).toEqual(1);
		expect(Fibonacci.fibonacciNumberAtPosition(3)).toEqual(2);
		expect(Fibonacci.fibonacciNumberAtPosition(4)).toEqual(3);
		expect(Fibonacci.fibonacciNumberAtPosition(5)).toEqual(5);
		expect(Fibonacci.fibonacciNumberAtPosition(6)).toEqual(8);
	});
});

describe('getFibonacciSequence', () => {
	it('given a fibonacci number, returns a SEQUENCE_LENGTH array of fibonacci numbers', () => {
		expect(Fibonacci.getFibonacciSequence(5)).toEqual([1, 1, 2, 3, 5]);
		expect(Fibonacci.getFibonacciSequence(8)).toEqual([1, 2, 3, 5, 8]);
		expect(Fibonacci.getFibonacciSequence(13)).toEqual([2, 3, 5, 8, 13]);
	});
});

describe('isPerfectSquare', () => {
	it('given a number, determines whether it is a perfect square', () => {
		expect(Fibonacci.isPerfectSquare(9)).toEqual(true);
		expect(Fibonacci.isPerfectSquare(13)).toEqual(false);
		expect(Fibonacci.isPerfectSquare(16)).toEqual(true);
		expect(Fibonacci.isPerfectSquare(20)).toEqual(false);
	});
});

describe('isFibonacci', () => {
	it('given a number, determines if it exists within the fibonacci sequence', () => {
		expect(Fibonacci.isFibonacci(5)).toEqual(true);
		expect(Fibonacci.isFibonacci(13)).toEqual(true);
		expect(Fibonacci.isFibonacci(20)).toEqual(false);
		expect(Fibonacci.isFibonacci(40)).toEqual(false);
	});
});

describe('sequencesAreEqual', () => {
	it('given 2 arrays, determines whether they are true equals', () => {
		expect(Fibonacci.sequencesAreEqual([5, 20], [5, 20])).toEqual(true);
		expect(Fibonacci.sequencesAreEqual([7, 3], [20])).toEqual(false);
		expect(Fibonacci.sequencesAreEqual([13], [13])).toEqual(true);
		expect(Fibonacci.sequencesAreEqual([40, 23], [40, 259])).toEqual(false);
	});
});

describe('isBetweenIndex', () => {
	it('given three values, determines if the first is equal or between the given bounds', () => {
		expect(Fibonacci.isBetweenIndex(2, 1, 5)).toEqual(true);
		expect(Fibonacci.isBetweenIndex(5, 1, 5)).toEqual(true);
		expect(Fibonacci.isBetweenIndex(6, 1, 5)).toEqual(false);
		expect(Fibonacci.isBetweenIndex(600, 1, 5)).toEqual(false);
	});
});
