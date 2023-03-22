import * as S from './index.style';

type Props = {
  contents: string[];
};

const TableOfContents = (props: Props) => {
  const { contents } = props;

  return (
    <S.Container>
      {contents.map((content,index) => (
        <li key={index}>{content}</li>
      ))}
    </S.Container>
  );
};

export default TableOfContents;
