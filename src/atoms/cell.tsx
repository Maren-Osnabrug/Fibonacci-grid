import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { theme } from "src/providers/theme";

export const Cell: React.FC<CellProps> = ({ value, animationColor, onClick }) => {
  const highlightAnimation = useRef(new Animated.Value(0)).current
  const colorInterpolation = highlightAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      theme.colors.white,
      animationColor,
      theme.colors.white,
    ]
  });

  const setUpdatedValue = () => onClick(value + 1);

  useEffect(() => {
    if (value) {
      Animated
        .timing(highlightAnimation, { toValue: 1, duration: 500 })
        .start(() => {
          highlightAnimation.setValue(0);
        })
    }
  }, [value]);

  return (
    <Container onPress={setUpdatedValue} activeOpacity={1}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: colorInterpolation,
        }}
      >
        <Content>{value}</Content>
      </Animated.View>
    </Container>
  );
};

interface CellProps {
  animationColor?: string;
  value: number;
  onClick: (newValue: number) => void;
}

Cell.defaultProps = {
  animationColor: theme.colors.yellow,
}

const Container = styled.TouchableOpacity`
  border: 1px solid black;
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
	background-color: ${props => props.theme.colors.white};
`;

const Content = styled.Text`
  text-align: center;
`;
