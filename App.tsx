import React from 'react';
import {Navigation} from './src/navigator/Navigation';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
