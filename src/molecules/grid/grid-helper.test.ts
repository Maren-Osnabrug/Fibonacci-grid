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

describe('getUpdatedGrid', () => {
	it('given grid and the indexes to update, updates the grid with +1 in each column and row of the selected index', () => {
		const initialGrid = GridHelper.constructInitialGrid(2);
		const received = GridHelper.getUpdatedGrid(initialGrid, 0, 0);
		const expectedResult = [
			[
				{ value: 1, cellIndex: 0, rowIndex: 0 },
				{ value: 1, cellIndex: 1, rowIndex: 0 },
			],
			[
				{ value: 1, cellIndex: 0, rowIndex: 1 },
				{ value: null, cellIndex: 1, rowIndex: 1 },
			],
		];
		expect(received).toEqual(expectedResult);

		const expectedNegativeResult = [
			[
				{ value: null, cellIndex: 0, rowIndex: 0 },
				{ value: null, cellIndex: 1, rowIndex: 0 },
			],
			[
				{ value: null, cellIndex: 0, rowIndex: 1 },
				{ value: 1, cellIndex: 1, rowIndex: 1 },
			],
		];
		expect(received).not.toEqual(expectedNegativeResult);
	});

	it('given grid with a fibonacci sequence and the indexes to update, updates the grid by emptying the fibonacci cells', () => {
		const grid = GridHelper.constructInitialGrid(5);
		grid[0] = [0, 1, 2, 3, 5].map((item, cellIndex) => ({
			value: item,
			rowIndex: 0,
			cellIndex,
		}));
		const received = GridHelper.getUpdatedGrid(grid, 0, 1);
		const expectedResult = [
			[
				{ value: null, cellIndex: 0, rowIndex: 0 },
				{ value: null, cellIndex: 1, rowIndex: 0 },
				{ value: null, cellIndex: 2, rowIndex: 0 },
				{ value: null, cellIndex: 3, rowIndex: 0 },
				{ value: null, cellIndex: 4, rowIndex: 0 },
			],
			[
				{ value: 1, cellIndex: 0, rowIndex: 1 },
				{ value: 1, cellIndex: 1, rowIndex: 1 },
				{ value: 1, cellIndex: 2, rowIndex: 1 },
				{ value: 1, cellIndex: 3, rowIndex: 1 },
				{ value: 1, cellIndex: 4, rowIndex: 1 },
			],
			[
				{ value: 1, cellIndex: 0, rowIndex: 2 },
				{ value: null, cellIndex: 1, rowIndex: 2 },
				{ value: null, cellIndex: 2, rowIndex: 2 },
				{ value: null, cellIndex: 3, rowIndex: 2 },
				{ value: null, cellIndex: 4, rowIndex: 2 },
			],
			[
				{ value: 1, cellIndex: 0, rowIndex: 3 },
				{ value: null, cellIndex: 1, rowIndex: 3 },
				{ value: null, cellIndex: 2, rowIndex: 3 },
				{ value: null, cellIndex: 3, rowIndex: 3 },
				{ value: null, cellIndex: 4, rowIndex: 3 },
			],
			[
				{ value: 1, cellIndex: 0, rowIndex: 4 },
				{ value: null, cellIndex: 1, rowIndex: 4 },
				{ value: null, cellIndex: 2, rowIndex: 4 },
				{ value: null, cellIndex: 3, rowIndex: 4 },
				{ value: null, cellIndex: 4, rowIndex: 4 },
			],
		];
		expect(received).toEqual(expectedResult);
	});
});
