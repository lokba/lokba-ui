import { Global, ThemeProvider } from '@emotion/react';

import Routes from '@/Routes';

import globalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
