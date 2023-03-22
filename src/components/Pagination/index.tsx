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
            <span>Previous</span>
            <em>{previous.label}</em>
          </div>
        </S.StyledLink>
      )}
      {!!next && (
        <S.StyledLink side="right" to={next.url}>
          <div>
            <span>Next</span>
            <em>{next.label}</em>
          </div>
          <AiOutlineArrowRight />
        </S.StyledLink>
      )}
    </S.Container>
  );
};

export default Pagination;
