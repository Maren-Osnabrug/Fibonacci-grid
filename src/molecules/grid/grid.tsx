import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Cell } from 'src/molecules/cell';
import {
	constructInitialGrid,
	getUpdatedGrid,
} from 'src/molecules/grid/grid-helper';

export const Grid: React.FC<GridProps> = ({ size }) => {
	const initialGrid = constructInitialGrid(size);
	const [grid, setGrid] = useState(initialGrid);

	const onCellClick = (clickedCellIndex: number, clickedRowIndex: number) => {
		const updatedGrid = getUpdatedGrid(
			grid,
			clickedCellIndex,
			clickedRowIndex
		);

		setGrid(updatedGrid);
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
