import { Global, ThemeProvider } from '@emotion/react';

import Routes from '@/Routes';

import Layout from '@/pages/Layout';

import globalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
