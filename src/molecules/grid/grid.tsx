import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Cell } from 'src/atoms/cell';
import {
	constructInitialGrid,
	checkFibonacci,
} from 'src/molecules/grid/grid-helper';
import { isFibonacci } from 'src/providers/fibonacci-math';

export const Grid: React.FC<GridProps> = ({ size }) => {
	const initialGrid = constructInitialGrid(size);
	const [grid, setGrid] = useState(initialGrid);

	const onCellClick = (clickedCellIndex: number, clickedRowIndex: number) => {
		const gridClone = grid.map((inner) => inner.slice());

		for (let iterator = 0; iterator < size; iterator++) {
			if (iterator !== clickedRowIndex) {
				// update vertical cells
				gridClone[iterator][clickedCellIndex].value += 1;
			}
			// update horizontal cells
			gridClone[clickedRowIndex][iterator].value += 1;

			// check for Fibonacci
			const cellValue = gridClone[clickedRowIndex][iterator].value;
			const rowCellValue = gridClone[iterator][clickedCellIndex].value;
			if (isFibonacci(cellValue) || isFibonacci(rowCellValue)) {
				checkFibonacci(gridClone[iterator]);
			}
		}
		setGrid(gridClone);
	};

	return (
		<Container>
			{grid.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map(({ value, cellIndex, rowIndex }: GridCell) => (
						<CellContainer
							key={`${rowIndex}-${cellIndex}`}
							rowCellCount={size}
						>
							<Cell
								value={value}
								onClick={() => onCellClick(cellIndex, rowIndex)}
							/>
						</CellContainer>
					))}
				</Row>
			))}
		</Container>
	);
};

export interface GridProps {
	size: number;
}

export interface GridCell {
	rowIndex: number;
	cellIndex: number;
	value: number;
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
	display: flex;
	width: calc(100% / ${(props) => props.rowCellCount});
`;
