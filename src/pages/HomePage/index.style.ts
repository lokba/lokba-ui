import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;

  > nav {
    position: sticky;
    top: 7rem;

    min-width: 20%;
    height: calc(100vh - 7rem);

    overflow-y: auto;
    overscroll-behavior: contain;
  }

  > main {
    width: 80%;
    min-height: 100%;
  }
`;
