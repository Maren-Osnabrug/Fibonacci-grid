import React, { useState } from 'react';
import styled from 'styled-components/native';

import { Cell } from 'src/atoms/cell';

export const Grid: React.FC<GridProps> = ({ rowCount, columnCount }) => {
	const initialGrid = new Array(rowCount).fill(new Array(columnCount).fill(null))
	const [grid, setGrid] = useState(initialGrid);

	const onCellClick = (clickedCellIndex, clickedRowIndex) => {
		let gridClone = grid.map(inner => inner.slice())
		gridClone = gridClone.map((row, rowIndex) => {
			if (rowIndex === clickedRowIndex) {
				console.log({rowIndex}, row)
				row = row.map((cell, cellIndex) => {
					if (cellIndex !== clickedCellIndex) {
						cell = cell + 1
					}
					return cell
				})
			}
			return row.map((cell: number | null, cellIndex) => {
				if (cellIndex === clickedCellIndex) {
					cell = cell + 1
				}
				return cell
			})
		})
		setGrid(gridClone);
	}

	return (
		<Container>
			{grid.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map((cell, cellIndex: number) => (
						<CellContainer key={cellIndex} rowCellCount={rowCount}>
							<Cell
								value={cell}
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
	rowCount: number;
	columnCount: number;
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
