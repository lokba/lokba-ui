import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const Container = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const StyledLink = styled(Link)<{ side: 'left' | 'right' }>`
  width: 50%;
  display: flex;
  justify-content: ${({ side }) => (side === 'left' ? 'flex-start' : 'flex-end')};
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 3rem;
  border: 1px solid #37b24d;

  > svg {
    width: 3.5rem;
    height: 3.5rem;
    color: #37b24d;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: ${({ side }) => (side === 'left' ? 'flex-start' : 'flex-end')};
    gap: 0.5rem;
    font-size: 1.8rem;

    > em {
      font-size: 2.8rem;
      font-weight: 700;
    }
  }
`;
