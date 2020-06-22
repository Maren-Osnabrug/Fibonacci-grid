import React from 'react';
import styled from 'styled-components/native';

import { Grid } from 'src/molecules/grid';
export const HomePage: React.FC = () => (
	<Container>
		<ColouredText>Home</ColouredText>
		<ColouredText>✅Maak een 50x50 grid.</ColouredText>
		<Grid rowCount={10} columnCount={10} />
		<ColouredText>
			✅Als je klikt op een cel, wordt bij alle cellen in de rij en kolom van de cel 1 opgeteld.
		</ColouredText>
		<ColouredText>
			✅Was een cel leeg, dan wordt die op 1 gezet.
		</ColouredText>
		<ColouredText>
			✅Na elke verandering licht een cel kort&nbsp;
			<ColouredText color="yellow">geel</ColouredText>&nbsp;op.
		</ColouredText>
		<ColouredText>
			Als 5 elkaar in de Fibonacci-reeks opvolgende getallen naast elkaar staan,
			lichten deze cellen kort&nbsp;
			<ColouredText color="green">groen</ColouredText>&nbsp;op en worden ze leeg gemaakt.
		</ColouredText>
		<ColouredText>
			Gebruik de programmeertaal die je het beste vindt passen.
		</ColouredText>
	</Container>
);

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-around;
`;

const ColouredText = styled.Text<{color?: string}>`
	background-color: ${props => props.theme.colors[props.color] || props.theme.colors.white}
`;
