import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

const theme = {
	colors: {
		yellow: 'rgb(255, 255, 0)',
		green: 'rgb(0, 255, 0)'
	}
};

export const ThemeProvider: React.FC = (props) => (
	<StyledThemeProvider theme={theme}>
			{props.children}
	</StyledThemeProvider>
);
