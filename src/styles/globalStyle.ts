import normalize from 'emotion-normalize';

import { css } from '@emotion/react';

const globalStyle = css`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  ol,
  ul,
  li {
    margin: 0;
    padding: 0;
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
`;

export default globalStyle;
