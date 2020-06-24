import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from 'src/providers/theme';

export const Cell: React.FC<CellProps> = React.memo(({ value, onClick }) => {
	const [firstRender, setFirstRender] = useState(true);
	const highlightAnimation = useRef(new Animated.Value(0)).current;
	const colorInterpolation = highlightAnimation.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: [
			theme.colors.white,
			cellAnimationColor(value),
			theme.colors.white,
		],
	});

	const setUpdatedValue = useCallback(() => onClick(value + 1), [value]);

	useEffect(() => {
		if (firstRender) {
			setFirstRender(false);
		} else {
			Animated.timing(highlightAnimation, { toValue: 1 }).start(() => {
				highlightAnimation.setValue(0);
			});
		}
	}, [value]);

	return (
		<CellContainer onPress={setUpdatedValue} activeOpacity={1}>
			<Animated.View
				style={{
					...StyleSheet.absoluteFillObject,
					backgroundColor: colorInterpolation,
				}}
			>
				<CenteredText>{value}</CenteredText>
			</Animated.View>
		</CellContainer>
	);
});

interface CellProps {
	value: number;
	onClick: (newValue: number) => void;
}

const cellAnimationColor = (cell: number | null) => {
	return cell === null ? theme.colors.green : theme.colors.yellow;
};

const CellContainer = styled.TouchableOpacity`
	border: 1px solid black;
	border-collapse: collapse;
	height: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.white};
`;

const CenteredText = styled.Text`
	text-align: center;
`;
