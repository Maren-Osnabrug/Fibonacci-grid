import React from 'react';
import styled from 'styled-components/native';

export const HomePage: React.FC = () => (
	<Container>
		<Text>Home</Text>
	</Container>
);

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-around;
`;

