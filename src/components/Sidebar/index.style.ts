import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
`;

export const Title = styled.p`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: underline #2b8a3e double;
`;

export const List = styled.ul`
  border-left: 3px solid #e7ebf0;
`;

export const Menu = styled.li<{ active: boolean }>`
  margin: 1rem 0;
  font-size: 1.8rem;
  cursor: pointer;

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

    &:hover {
      font-weight: 700;
    }
  }

  ${({ active }) =>
    active
      ? css`
          color: #2b8a3e;
          font-weight: 700;

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
