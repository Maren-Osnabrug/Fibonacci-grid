import React, { useContext }  from 'react';
import { ThemeContext, DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components/native';

export const theme: DefaultTheme = {
	colors: {
		white: 'rgb(255, 255, 255)',
		yellow: 'rgb(255, 255, 0)',
		green: 'rgb(0, 255, 0)'
	}
};

export const ThemeProvider: React.FC = (props) => (
	<StyledThemeProvider theme={theme}>
			{props.children}
	</StyledThemeProvider>
);

export const useTheme = () => useContext(ThemeContext);
