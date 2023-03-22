import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 1rem 2rem 4rem;
`;

export const Title = styled.p`
  margin: 1.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  color: #37b24d;
`;

export const List = styled.ul`
  border-left: 3px solid #e7ebf0;
`;

export const Menu = styled.li<{ active: boolean }>`
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    font-weight: 700;
    background: #d3f9d8;
  }

  a {
    display: block;
    padding: 1rem 0;
    color: inherit;

    ::before {
      content: '';
      margin: 0 10px 0 -3px;
      padding: 1rem 0;
      border-left: 3px solid #e7ebf0;
    }
  }

  ${({ active }) =>
    active
      ? css`
          font-weight: 700;
          color: #2b8a3e;
          background: #d3f9d8;

          a::before {
            border-left: 3px solid #2b8a3e;
          }
        `
      : css`
          a:hover::before {
            border-left: 3px solid #adb5bd;
          }
        `}
`;
