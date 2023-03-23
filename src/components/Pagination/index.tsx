import { Text } from '@lokba-ui/react';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import * as S from './index.style';

type Props = {
  previous?: { label: string; url: string };
  next?: { label: string; url: string };
};

const Pagination = (props: Props) => {
  const { previous, next } = props;

  return (
    <S.Container>
      {!!previous && (
        <S.StyledLink side="left" to={previous.url}>
          <AiOutlineArrowLeft />
          <div>
            <Text as="span">Previous</Text>
            <Text as="em" fontSize="2.8rem">
              {previous.label}
            </Text>
          </div>
        </S.StyledLink>
      )}
      {!!next && (
        <S.StyledLink side="right" to={next.url}>
          <div>
            <Text as="span">Next</Text>
            <Text as="em" fontSize="2.8rem">
              {next.label}
            </Text>
          </div>
          <AiOutlineArrowRight />
        </S.StyledLink>
      )}
    </S.Container>
  );
};

export default Pagination;
