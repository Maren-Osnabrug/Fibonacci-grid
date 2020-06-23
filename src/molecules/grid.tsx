import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Cell } from 'src/atoms/cell';

const cellAnimationColor = (cell) => {
	return cell === null ? 'rgba(0, 255, 0, 1)' : 'rgba(255, 255, 0, 1)'
}

const isPerfectSquare = (number: number) => {
		const square = Math.floor(Math.sqrt(number));
		return ((square * square) === number);
}

// Function to return the previous fibonacci number
const previousFibonacci = (n: number) => {
    const a = n / ((1 + Math.sqrt(5)) / 2.0);
    return Math.round(a)
}

const getSequence = (cell) => {
	let sequence = []
	let toPush = cell
	for (let iterator = 0; iterator < 5; iterator++) {
		sequence.push(toPush)
		toPush = previousFibonacci(toPush)
	}

	return sequence.reverse()
}

// Returns true if n is a Fibinacci Number, else false
const isFibonacci = (n) => {
	// n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both is a perferct square
	return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

export const Grid: React.FC<GridProps> = ({ size }) => {
	const initialGrid = new Array(size).fill(new Array(size).fill(null))
	const [grid, setGrid] = useState(initialGrid);

	const onCellClick = (clickedCellIndex: number, clickedRowIndex: number) => {
		let gridClone = grid.map(inner => inner.slice())

		for (let iterator = 0; iterator < size; iterator++) {
			if (iterator !== clickedRowIndex) {
				// update vertical
				gridClone[iterator][clickedCellIndex] += 1
			}
			// update row
			gridClone[clickedRowIndex][iterator] += 1
		}

		gridClone.map((row, rowIndex) => {
			// starting at last index of array - see reversed
		return row.map((cell: number, cellIndex: number) => {
				// check if cell is higher than or equal 5,
				// in a sequence of 5 Fibinacci numbers, it cannot be lower than 5
				if (cell < 5) { return row }
				// check if cell is Fibonacci number,
				if (!isFibonacci(cell)) { return row }
				// generate 5 length fib sequence with that cellnumber as highest
				const sequence = getSequence(cell);
				// generate row of 5
				const endIndex = cellIndex - 5
				if (endIndex <= row.length) {
					let subsetRow = row.slice(endIndex + 1, cellIndex + 1)
					// check if fib seq is equal to 5 length back from cell
					if (sequence.every((currentValue, index) => currentValue === subsetRow[index])) {
						row = row.map((rowLower, rowLowerIndex) => {
							if (rowLowerIndex >= (endIndex + 1) && rowLowerIndex <= cellIndex) {
								rowLower = null
							}
							return rowLower
						})
						gridClone[rowIndex] = row
						return row
					}
					return row
				}
				return row;
			})
		})
		setGrid(gridClone);
	}

	return (
		<Container>
			{grid.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map((cell: number, cellIndex: number) => (
						<CellContainer key={cellIndex} rowCellCount={size}>
							<Cell
								value={cell}
								animationColor={cellAnimationColor(cell)}
								onClick={() => onCellClick(cellIndex, rowIndex)}
							/>
						</CellContainer>
					))}
				</Row>
			))}
		</Container>
	)
};

interface GridProps {
	size: number;
}

const Container = styled.View`
	display: flex;
	flex-direction: column;
	width: 95%;
`;

const Row = styled.View`
	display: flex;
	flex-direction: row;
`;

const CellContainer = styled.View<{rowCellCount: number}>`
	width: calc(100% / ${props => props.rowCellCount});
	display: flex;
`;
