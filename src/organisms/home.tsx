import React from 'react';
import styled from 'styled-components/native';

import { Grid } from 'src/molecules/grid/grid';

export const HomePage: React.FC = () => (
	<Container>
		<Title>Q42 opdracht</Title>
		<HighlightedText>Maak een 50x50 grid.</HighlightedText>
		<Grid size={10} />
		<HighlightedText>
			Als je klikt op een cel, wordt bij alle cellen in de rij en kolom
			van de cel 1 opgeteld.
		</HighlightedText>
		<HighlightedText>
			Was een cel leeg, dan wordt die op 1 gezet.
		</HighlightedText>
		<HighlightedText>
			Na elke verandering licht een cel kort&nbsp;
			<HighlightedText color="yellow">geel</HighlightedText>&nbsp;op.
		</HighlightedText>
		<HighlightedText>
			Als 5 elkaar in de Fibonacci-reeks opvolgende getallen naast elkaar
			staan, lichten deze cellen kort&nbsp;
			<HighlightedText color="green">groen</HighlightedText>&nbsp;op en
			worden ze leeg gemaakt.
		</HighlightedText>
		<HighlightedText>
			Gebruik de programmeertaal die je het beste vindt passen.
		</HighlightedText>
	</Container>
);

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-evenly;
`;

const Title = styled.Text`
	font-size: 32px;
`;

const HighlightedText = styled.Text<{ color?: string }>`
	background-color: ${(props) =>
		props.theme.colors[props.color] || props.theme.colors.white};
`;
