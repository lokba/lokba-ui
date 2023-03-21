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
    display: flex;
    padding: 1rem 5rem 10rem;
  }
`;

export const Left = styled.div`
  width: 75%;
`;

export const Right = styled.div`
  width: 25%;
  padding: 5rem;

  > div {
    position: fixed;
  }
`;

export const Title = styled.h2`
  margin: 2rem 0;
  font-size: 3.5rem;
  border-bottom: 2px solid #e7ebf0;
`;

export const Description = styled.p`
  font-size: 2rem;
`;

export const Sub = styled.h3`
  margin: 1.5rem 0;
  font-size: 3rem;
`;
