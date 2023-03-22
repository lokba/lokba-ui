import styled from '@emotion/styled';

type Props = {
  h: number;
};

const Spacing = styled.div<Props>`
  height: ${({ h }) => `${h}rem`};
`;

export default Spacing;
