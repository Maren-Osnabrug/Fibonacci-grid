import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Cell } from 'src/atoms/cell';
import {
	SEQUENCE_LENGTH,
	getFibonacciSequence,
	isFibonacci,
	MINIMUM_FIBONACCI_VALUE,
	sequencesAreEqual,
	isBetweenIndex,
} from 'src/providers/fibonacci-math';

export const Grid: React.FC<GridProps> = ({ size }) => {
	const initialGrid = new Array(size).fill(new Array(size).fill(null));
	const [grid, setGrid] = useState(initialGrid);

	const onCellClick = (clickedCellIndex: number, clickedRowIndex: number) => {
		const gridClone = grid.map((inner) => inner.slice());

		for (let iterator = 0; iterator < size; iterator++) {
			if (iterator !== clickedRowIndex) {
				gridClone[iterator][clickedCellIndex] += 1; // update vertical
			}
			gridClone[clickedRowIndex][iterator] += 1; // update row
		}

		gridClone.map((row, rowIndex) =>
			row.map((cell: number, cellIndex: number) => {
				const endIndex = cellIndex - SEQUENCE_LENGTH + 1;
				if (
					cell < MINIMUM_FIBONACCI_VALUE ||
					!isFibonacci(cell) ||
					endIndex >= row.length
				) {
					return row;
				}

				// generate SEQUENCE_LENGTH fibonacci sequence with that cellnumber as highest
				const sequence = getFibonacciSequence(cell);
				const subsetRow = row.slice(endIndex, cellIndex + 1);
				// check if fib seq is equal to SEQUENCE_LENGTH subset from the row, else return early
				if (!sequencesAreEqual(sequence, subsetRow)) {
					return row;
				}

				gridClone[rowIndex] = row.map((rowLower, rowLowerIndex) =>
					// prettier-ignore
					isBetweenIndex(rowLowerIndex, endIndex, cellIndex) ? null : rowLower
				);
			})
		);
		setGrid(gridClone);
	};

	return (
		<Container>
			{grid.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map((cell: number, cellIndex: number) => (
						<CellContainer key={cellIndex} rowCellCount={size}>
							<Cell
								value={cell}
								onClick={() => onCellClick(cellIndex, rowIndex)}
							/>
						</CellContainer>
					))}
				</Row>
			))}
		</Container>
	);
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

const CellContainer = styled.View<{ rowCellCount: number }>`
	width: calc(100% / ${(props) => props.rowCellCount});
	display: flex;
`;
