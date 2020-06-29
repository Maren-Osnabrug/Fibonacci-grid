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
			{grid.flat().map((row, rowIndex) => {
				return (
					<CellContainer
						key={`${rowIndex}-${row.cellIndex}`}
						rowCellCount={size}
					>
						<Cell
							value={row.value}
							onClick={() =>
								onCellClick(row.cellIndex, row.rowIndex)
							}
						/>
					</CellContainer>
				);
			})}
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
	flex-direction: row;
	flex-wrap: wrap;
	width: 95%;
`;

const CellContainer = styled.View<{ rowCellCount: number }>`
	display: flex;
	width: calc(100% / ${(props) => props.rowCellCount});
`;
