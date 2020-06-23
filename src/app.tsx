import React from 'react';

import { ThemeProvider } from 'src/providers/theme';
import { HomePage } from 'src/organisms/home';

export const App: React.FC = () => (
	<ThemeProvider>
		<HomePage />
	</ThemeProvider>
);
