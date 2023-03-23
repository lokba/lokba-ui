import { Text } from '@lokba-ui/react';

import * as S from './index.style';

type Props = {
  contents: string[];
};

const TableOfContents = (props: Props) => {
  const { contents } = props;

  return (
    <S.Container>
      {contents.map((content, index) => (
        <Text as="li" fontSize="2rem" color="#868e96" key={index}>
          {content}
        </Text>
      ))}
    </S.Container>
  );
};

export default TableOfContents;
