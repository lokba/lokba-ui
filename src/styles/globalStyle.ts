import normalize from 'emotion-normalize';

import { css } from '@emotion/react';

const globalStyle = css`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;

    &:hover,
    &:visited,
    &:link {
      color: black;
    }
  }

  em {
    font-style: normal;
  }
`;

export default globalStyle;
