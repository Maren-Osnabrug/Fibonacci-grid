import { GridCell } from 'src/molecules/grid/grid';

import {
	SEQUENCE_LENGTH,
	getFibonacciSequence,
	isFibonacci,
	MINIMUM_FIBONACCI_VALUE,
	sequencesAreEqual,
} from 'src/providers/fibonacci-math';

export const constructInitialGrid = (size: number) => {
	const initialGrid: [][] = new Array(size).fill(
		new Array(size).fill({ value: null })
	);

	return initialGrid.map((row, rowIndex) =>
		row.map((_, cellIndex: number) => ({
			value: null,
			cellIndex,
			rowIndex,
		}))
	);
};

export const getUpdatedGrid = (
	grid: GridCell[][],
	clickedCellIndex: number,
	clickedRowIndex: number
) => {
	const gridToUpdate = grid.map((inner) => inner.slice());

	for (let iterator = 0; iterator < grid.length; iterator++) {
		if (iterator !== clickedRowIndex) {
			// update vertical cells
			gridToUpdate[iterator][clickedCellIndex].value += 1;
		}
		// update horizontal cells
		gridToUpdate[clickedRowIndex][iterator].value += 1;

		// check for Fibonacci
		const cellValue = gridToUpdate[clickedRowIndex][iterator].value;
		const rowCellValue = gridToUpdate[iterator][clickedCellIndex].value;
		if (isFibonacci(cellValue) || isFibonacci(rowCellValue)) {
			checkFibonacci(gridToUpdate[iterator]);
		}
	}
	return gridToUpdate;
};

export const checkFibonacci = (row: GridCell[]) =>
	row.map((cell: GridCell) => {
		const endIndex = cell.cellIndex - SEQUENCE_LENGTH + 1;
		if (
			cell.value < MINIMUM_FIBONACCI_VALUE ||
			!isFibonacci(cell.value) ||
			endIndex >= row.length
		) {
			return;
		}

		const sequence = getFibonacciSequence(cell.value);
		const subsetRow = row.slice(endIndex, cell.cellIndex + 1);
		if (
			!sequencesAreEqual(
				sequence,
				subsetRow.map((item) => item.value)
			)
		) {
			return;
		}

		subsetRow.map((cellInSubset) => {
			const cellToUpdate = row.find(
				(cellInRow: GridCell) =>
					cellInRow.rowIndex === cellInSubset.rowIndex &&
					cellInRow.cellIndex === cellInSubset.cellIndex
			);
			if (cellToUpdate) {
				cellToUpdate.value = null;
			}
		});
	});
