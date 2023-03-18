import { AiFillGithub } from 'react-icons/ai';

import { GITHUB_URL } from '@/constants';

import * as S from './index.style';

const Header = () => {
  return (
    <S.Container>
      <h1>Design System</h1>
      <a href={GITHUB_URL} target="_blank">
        <AiFillGithub />
      </a>
    </S.Container>
  );
};

export default Header;
