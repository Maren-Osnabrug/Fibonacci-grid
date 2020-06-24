import * as GridHelper from './grid-helper';

describe('constructInitialGrid', () => {
	it('given a size, constructs a 2D array of that size', () => {
		const initialGrid = GridHelper.constructInitialGrid(5);
		expect(initialGrid).toHaveLength(5);
		expect(initialGrid[0]).toHaveLength(5);
	});

	it('given a size, constructs a 2D array of that size filled with GridCell Objects', () => {
		const initialGrid = GridHelper.constructInitialGrid(2);
		const expectedResult = [
			[
				{ value: null, cellIndex: 0, rowIndex: 0 },
				{ value: null, cellIndex: 1, rowIndex: 0 },
			],
			[
				{ value: null, cellIndex: 0, rowIndex: 1 },
				{ value: null, cellIndex: 1, rowIndex: 1 },
			],
		];
		expect(initialGrid).toEqual(expectedResult);
	});
});
