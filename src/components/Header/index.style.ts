import styled from '@emotion/styled';

export const Container = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7rem;
  padding: 0 2rem;

  background: white;
  border-bottom: 1px solid #e7ebf0;
  z-index: 10;

  h1 {
    font-size: 2.4rem;
  }

  svg {
    width: 3rem;
    height: 3rem;
  }
`;
